"use client";

import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";
import { store } from "@/store/store";
import { pageData } from "@/types/types";
import React from "react";
import { Provider } from "react-redux";

type Props = {
    content: pageData;
    projectId: string;
};

const Preview = ({ content, projectId }: Props) => {
    return (
        <Provider store={store}>
            <main className="p-2 md:px-12">
                <Navbar elements={content.elements.navbar} projectId={projectId!} />
                <div className="flex flex-col">
                    <Header elements={content.elements.header} projectId={projectId} />
                </div>
                <Footer elements={content.elements.footer} projectId={projectId!} />
            </main>
        </Provider>
    );
};

export default Preview;
