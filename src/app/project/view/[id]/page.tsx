import Header from "@/components/sections/header";
import Services from "@/components/sections/services";
import landingPageData from "@/data/landing-page";
import { pageData } from "../../../../types/types";

type propsType = {
    pageData?: pageData;
    projectId: string;
};

export default function ProjectPage({ pageData, projectId }: propsType) {
    if (!pageData) {
        pageData = landingPageData;
    }
    return (
        <div className="flex flex-col">
            <Header elements={pageData.elements.header} projectId={projectId} />
            <Services elements={pageData.elements.services} />
        </div>
    );
}
