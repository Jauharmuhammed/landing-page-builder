import ProjectLayout from "@/app/project/[id]/layout";
import ProjectPage from "@/app/project/[id]/page";
import React from "react";
import { layoutReducer } from "../../types";
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
