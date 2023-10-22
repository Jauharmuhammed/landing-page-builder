"use client";

import { getProjectAction } from "@/app/action/project";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/options";
import Preview from "@/components/preview";
import { SidebarNav } from "@/components/sidebar-nav";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { store } from "@/store/store";
import { eq } from "drizzle-orm";
import { Provider } from "react-redux";

const sidebarNavItems = [
    {
        title: "Navbar",
        href: "/project/new",
    },
    {
        title: "Header",
        href: "/project/new/header",
    },
    {
        title: "Services",
        href: "/project/new/services",
    },
    {
        title: "Footer",
        href: "/project/new/footer",
    },
];

export default async function NewLandingPageLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: any;
}) {
    console.log(params.id);
    try {
        const session = await getAuthSession();
        if (!session) return Error("Not logged in");
        const project = await db.select().from(projects).where(eq(projects.id, params.id));
        console.log(project);
    } catch (error) {
        console.log(error);
    }
    return (
        <Provider store={store}>
            <main className="w-full flex justify-center p-12">
                <Tabs defaultValue="edit" className="w-full flex flex-col items-center">
                    <TabsList className="grid w-[400px] grid-cols-2">
                        <TabsTrigger value="edit">Edit</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent className="w-full" value="edit">
                        <div className="space-y-6 p-10 pb-16">
                            <div className="space-y-0.5">
                                <h2 className="text-2xl font-bold tracking-tight">Edit</h2>
                                <p className="text-muted-foreground">
                                    Manage your components and styles.
                                </p>
                            </div>
                            <Separator className="my-6" />
                            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                                <aside className="-mx-4 lg:w-1/5">
                                    <SidebarNav items={sidebarNavItems} />
                                </aside>
                                <div className="flex-1 lg:max-w-2xl">{children}</div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent className="w-full" value="preview">
                        <Preview />
                    </TabsContent>
                </Tabs>
            </main>
        </Provider>
    );
}
