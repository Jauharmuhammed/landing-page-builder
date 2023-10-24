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
        <ProjectLayout pageData={data} projectId={projectId}>
            <ProjectPage pageData={data} />
        </ProjectLayout>
    );
};

export default Preview;
