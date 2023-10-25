import landingPage from "@/data/landing-page";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

type Props = {};

const Services = ({}: Props) => {
    const { header, section } = landingPage.elements.services;
    return (
        <section className="space-y-6 py-12">
            <h2 className="text-5xl text-center">{header.title}</h2>
            <p className="text-center md:pb-12">{header.description}</p>
            <div className="md:flex space-y-6 md:space-y-0 space-x-20">
                {section.map((element) => (
                    <div key={element.title} className="group">
                        <div
                            key={element.title}
                            className="rounded-3xl flex-1 w-full aspect-square flex">
                            <Image
                                width={500}
                                height={500}
                                className="px-6"
                                src={element.src}
                                alt={element.title}
                            />
                        </div>
                        <div className="flex space-x-6 items-center justify-between cursor-pointer w-full self-end rounded-2xl p-4 ">
                            <div className="flex flex-col">
                                <h3 className={cn("text-lg uppercase", plusJakartaSans.className)}>
                                    {element.title}
                                </h3>
                                <p className="dark:text-zinc-600 text-sm">{element.description}</p>
                            </div>
                            <div className="bg-slate-300 dark:bg-slate-600 rounded-full p-3 group-hover:rotate-[-360deg] transition-transform duration-1000">
                                <ArrowRight size={36} strokeWidth={1} className="-rotate-45" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
