import Header from "@/components/sections/header";
import Services from "@/components/sections/services";
import landingPageData from "@/data/landing-page";
import { pageData } from "../../../../types";

type propsType = {
    pageData?: pageData;
};

export default function ProjectPage({ pageData }: propsType) {
    if (!pageData) {
        pageData = landingPageData;
    }
    return (
        <div className="flex flex-col">
            <Header elements={pageData.elements.header} />
            <Services elements={pageData.elements.services} />
        </div>
    );
}
