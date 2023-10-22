import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import data from "@/data/landing-page";
import { pageData } from "../../../../types/types";

type propsType = {
    children: React.ReactNode;
    pageData?: pageData;
};

export default function ProjectLayout({ children, pageData }: propsType) {
    if (!pageData) {
        pageData = data;
    }
    return (
        <main>
            <Navbar elements={pageData.elements.navbar} />
            {children}
            <Footer elements={pageData.elements.footer} />
        </main>
    );
}
