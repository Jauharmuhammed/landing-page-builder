"use client";

import Preview from "@/components/preview";
import { SidebarNav } from "@/components/sidebar-nav";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import Loader from "@/components/loader";
import { setLayout } from "@/store/layoutSlice";
import { useRouter } from "next/navigation";
import { setCurrentProject } from "@/store/projectSlice";

export default function NewLandingPageLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: any;
}) {
    const sidebarNavItems = [
        {
            title: "Navbar",
            href: `/project/edit/${params.id}`,
        },
        {
            title: "Header",
            href: `/project/edit/${params.id}/header`,
        },
        {
            title: "Services",
            href: `/project/edit/${params.id}/services`,
        },
        {
            title: "Footer",
            href: `/project/edit/${params.id}/footer`,
        },
    ];

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useDispatch();
    const router = useRouter();

    const getProjectDetails = async (id: string) => {
        try {
            if (!id) {
                //navigate to error page and show toast
            }

            setIsLoading(true);

            const response = await axios.get(`/api/project/${id}`);
            dispatch(setLayout(response.data.content));
            dispatch(setCurrentProject(response.data));
        } catch (error) {
            console.log(error);
            router.push("/dashboard");
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getProjectDetails(params.id);
    }, [params.id]);

    if (isLoading) {
        return <Loader fill />;
    }

    return (
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
                    <Preview projectId={params.id} />
                </TabsContent>
            </Tabs>
        </main>
    );
}
