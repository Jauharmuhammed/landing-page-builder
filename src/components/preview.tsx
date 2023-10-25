"use client";

import ProjectLayout from "@/app/project/view/[id]/layout";
import ProjectPage from "@/app/project/view/[id]/page";
import React from "react";
import { layoutReducer } from "../types/types";
import { useSelector } from "react-redux";
import { currentProjectStore } from "@/store/projectSlice";

type Props = {
    projectId: string;
};

const Preview = ({ projectId }: Props) => {
    const data = useSelector((state: layoutReducer) => state.layout);

    return (
        <div className="border rounded-md h-[90vh] overflow-y-auto">
            <ProjectLayout pageData={data} projectId={projectId}>
                <ProjectPage pageData={data} projectId={projectId}/>
            </ProjectLayout>
        </div>
    );
};

export default Preview;
