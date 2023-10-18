import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

type Section = {
    src: string;
    link: string;
    title: string;
    description: string;
    label: string;
};

type Props = {
    elements: {
        header: {
            title: string;
            description: string;
        };
        section: Section[];
    };
};

const Services = ({ elements }: Props) => {
    const { header, section } = elements;
    return (
        <section className="p-12 space-y-6">
            <h2 className="text-5xl text-center">{header.title}</h2>
            <p className="text-center">{header.description}</p>
            <div className="flex gap-2">
                {section.map((element) => (
                    <div
                        key={element.title}
                        className="relative rounded-3xl flex-1 w-full aspect-square overflow-hidden flex">
                        <div className="flex space-x-6 items-center w-full self-end m-2 rounded-3xl p-4 bg-white">
                            <div className="flex flex-col">
                                <h3 className={cn("text-xl uppercase", plusJakartaSans.className)}>
                                    {element.title}
                                </h3>
                                <p className="">{element.description}</p>
                            </div>
                            <div className="bg-slate-300 rounded-full p-3">
                                <ArrowRight size={36} strokeWidth={1} className="-rotate-45 "/>
                            </div>
                        </div>
                        <Image
                            width={500}
                            height={500}
                            className="absolute inset-0 w-full h-full -z-10"
                            src={element.src}
                            alt={element.title}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
