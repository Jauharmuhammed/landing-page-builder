import Header from "@/components/sections/header";
import Services from "@/components/sections/services";
import data from "@/data/landing-page";

export default function ProjectPage() {
    
    return (
        <div className="flex flex-col">
            <Header elements={data.elements.header} />
            <Services elements={data.elements.services} />
        </div>
    );
}
