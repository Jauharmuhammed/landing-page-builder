import { getSingleProjectAction } from "@/app/_actions/project";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";
import { pageData } from "@/types/types";
import React from "react";
import Preview from "./preview";

type Props = {
    params: any;
};

const ExploreProjectPage = async ({ params }: Props) => {
    const projectId = params.id;
    const data = await getSingleProjectAction(projectId);
    const content = data.content as pageData;

    return <Preview content={content} projectId={projectId} />;
};

export default ExploreProjectPage;
