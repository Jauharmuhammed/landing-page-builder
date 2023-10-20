import ProjectLayout from "@/app/project/[id]/layout";
import ProjectPage from "@/app/project/[id]/page";
import React from "react";

type Props = {};

const Preview = (props: Props) => {
    return (
        <ProjectLayout>
            <ProjectPage />
        </ProjectLayout>
    );
};

export default Preview;
