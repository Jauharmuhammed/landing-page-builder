import ProjectLayout from "@/app/project/view/[id]/layout";
import ProjectPage from "@/app/project/view/[id]/page";
import React from "react";
import { layoutReducer } from "../types/types";
import { useSelector } from "react-redux";

type Props = {};

const Preview = (props: Props) => {
    const data = useSelector((state: layoutReducer) => state.layout);
    return (
        <ProjectLayout pageData={data}>
            <ProjectPage pageData={data} />
        </ProjectLayout>
    );
};

export default Preview;
