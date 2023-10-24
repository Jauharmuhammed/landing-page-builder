import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { header } from "@/types/types";
import landingPage from "@/data/landing-page";

type Props = {
    elements?: header;
};

const Header = ({ elements }: Props) => {
    if (!elements) {
        // return null;
        elements = landingPage.elements.header;
    }
    return (
        <section className="w-full flex flex-col md:flex-row pb-12 gap-4 md:gap-12">
            <div className="md:w-1/2 pt-12 md:pt-1 xl:py-12 flex flex-col justify-center space-y-6 md:space-y-8 xl:space-y-12">
                {elements?.heading && <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl xl:w-4/5">{elements.heading}</h3>}
                {elements?.ctaButton?.label && (
                    <Button className="w-fit rounded-3xl mt-2 flex space-x-2 xl:p-8 group">
                        <span>{elements.ctaButton.label}</span>
                        <ArrowRight
                            className="group-hover:translate-x-1 transition-transform duration-300"
                            size={16}
                        />
                    </Button>
                )}
                {elements?.description && <p className="text-gray-700">{elements.description}</p>}
            </div>
            {elements?.image && (
                <div className="md:w-1/2 rounded-3xl overflow-hidden h-fit">
                    <Image
                        width={500}
                        height={500}
                        className="w-full hover:scale-105 transition-transform duration-300 ease-in aspect-square"
                        src={elements.image}
                        alt="Header Image"
                    />
                </div>
            )}
        </section>
    );
};

export default Header;
