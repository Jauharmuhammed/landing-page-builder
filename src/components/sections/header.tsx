import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type Props = {
    elements: {
        heading: string;
        description: string;
        image: string;
        ctaButton: {
            label: string;
            link: string;
        };
    };
};

const Header = ({ elements }: Props) => {
    return (
        <section className="w-full flex px-12 pb-12 gap-12">
            <div className="w-1/2 py-12 flex flex-col space-y-12">
                <h3 className="text-6xl w-4/5">{elements.heading}</h3>
                <Button className="w-fit rounded-3xl mt-2 flex space-x-2 p-8 group" size={"lg"}>
                    <span>{elements.ctaButton.label}</span>
                    <ArrowRight
                        className="group-hover:translate-x-1 transition-transform duration-300"
                        size={16}
                    />
                </Button>
                <p className="text-gray-700">{elements.description}</p>
            </div>
            <div className="w-1/2 rounded-3xl overflow-hidden h-fit">
                <Image
                    width={500}
                    height={500}
                    className="w-full hover:scale-105 transition-transform duration-300 ease-in aspect-square"
                    src={elements.image}
                    alt="Header Image"
                />
            </div>
        </section>
    );
};

export default Header;
