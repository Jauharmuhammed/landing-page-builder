"use client";

import Preview from "@/components/preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function NewLandingPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <main className="w-full flex justify-center p-12">
                <Tabs defaultValue="edit" className="w-full flex flex-col items-center">
                    <TabsList className="grid w-[400px] grid-cols-2">
                        <TabsTrigger value="edit">Edit</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent className="w-full" value="edit">
                        {children}
                    </TabsContent>
                    <TabsContent className="w-full" value="preview">
                        <Preview />
                    </TabsContent>
                </Tabs>
            </main>
        </Provider>
    );
}
