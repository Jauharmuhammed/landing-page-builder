"use client";

import React from "react";
import { layoutReducer } from "../types/types";
import { useSelector } from "react-redux";
import Footer from "./sections/footer";
import Navbar from "./sections/navbar";
import Header from "./sections/header";

type Props = {
    projectId: string;
};

const Preview = ({ projectId }: Props) => {
    const data = useSelector((state: layoutReducer) => state.layout);

    return (
        <div className="border rounded-md h-[90vh] overflow-y-auto">
            <main className="p-2 md:px-12">
                <Navbar elements={data.elements.navbar} projectId={projectId!} />
                <div className="flex flex-col">
                    <Header elements={data.elements.header} projectId={projectId} />
                </div>
                <Footer elements={data.elements.footer} projectId={projectId!} />
            </main>
        </div>
    );
};

export default Preview;
