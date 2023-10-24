import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import data from "@/data/landing-page";
import { pageData } from "../../../../types/types";

type propsType = {
    children: React.ReactNode;
    pageData?: pageData;
    projectId?: string;
};

export default function ProjectLayout({ children, pageData, projectId }: propsType) {
    if (!pageData) {
        pageData = data;
    }
    return (
        <main>
            <Navbar elements={pageData.elements.navbar} projectId={projectId!} />
            {children}
            <Footer elements={pageData.elements.footer} />
        </main>
    );
}
