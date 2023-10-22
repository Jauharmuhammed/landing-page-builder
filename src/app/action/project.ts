"use server";

import { v4 as uuidv4 } from "uuid";

import { newProjectFormSchema } from "@/components/new-project-form";
import * as z from "zod";
import { getAuthSession } from "../api/auth/[...nextauth]/options";
import { projects } from "@/lib/db/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";

type NewProject = typeof projects.$inferInsert;

export async function addProjectsAction(value: z.infer<typeof newProjectFormSchema>) {
    const session = await getAuthSession();
    if (!session) return Error("Not logged in");
    const result_projects: NewProject = {
        id: uuidv4(),
        userId: session.user.id,
        title: value.title,
        json: { styles: {}, elements: {} },
    };

    const newProjectId = await db
        .insert(projects)
        .values(result_projects)
        .returning({ insertedId: projects.id });
    // revalidatePath("/");

    return newProjectId[0].insertedId;
}

export async function getProjectAction(id: string) {
    const session = await getAuthSession();
    if (!session) return Error("Not logged in");
    const project = await db.select().from(projects).where(eq(projects.id, id));
    return project[0];
}
