"use server";

import { v4 as uuidv4 } from "uuid";

import { newProjectFormSchema } from "@/components/new-project-form";
import * as z from "zod";
import { getAuthSession } from "../api/auth/[...nextauth]/options";
import { projects } from "@/lib/db/schema";
import { db } from "@/lib/db";
import { and, desc, eq } from "drizzle-orm";
import { pageData } from "@/types/types";
import { user } from "../../../drizzle/schema";
import { revalidatePath } from "next/cache";

type NewProject = typeof projects.$inferInsert;

export async function addProjectsAction(value: z.infer<typeof newProjectFormSchema>) {
    const session = await getAuthSession();
    if (!session) return Error("Not logged in");
    const result_projects: NewProject = {
        id: uuidv4(),
        userId: session.user.id,
        title: value.title,
        description: value.description,
        content: { styles: {}, elements: {} },
    };

    const newProjectId = await db
        .insert(projects)
        .values(result_projects)
        .returning({ insertedId: projects.id });
    revalidatePath("/dashboard");

    return newProjectId[0].insertedId;
}

export async function getProjectAction(id: string) {
    const session = await getAuthSession();
    if (!session) return Error("Not logged in");
    const project = await db.select().from(projects).where(eq(projects.id, id));
    return project[0];
}

export async function updateProjectLayoutAction(id: string, layout: pageData) {
    const session = await getAuthSession();
    if (!session) return Error("Not logged in");

    await db
        .update(projects)
        .set({ content: layout, updatedAt: new Date() })
        .where(and(eq(projects.id, id), eq(projects.userId, session.user.id)));
}

export async function getProjectByUserAction() {
    const session = await getAuthSession();
    if (!session) return Error("Not logged in");

    const projectList = await db
        .select()
        .from(projects)
        .where(and(eq(projects.userId, session.user.id), eq(projects.isActive, true)))
        .orderBy(desc(projects.updatedAt));
    return projectList;
}
