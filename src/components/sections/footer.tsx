import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { footer } from "@/types/types";
import { useSelector } from "react-redux";
import { ImageElementStore } from "@/store/imageSlice";

type Props = {
    elements?: footer;
    projectId: string;
};

const Footer = ({ elements, projectId }: Props) => {
    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find(
            (element) => element.key === `footer-logo-${projectId}`
        );
        return imageElement ? imageElement.url : null;
    });

    return (
        <footer className="">
            <div className="my-12">
                {imagePreview ? (
                    <Image
                        width={10}
                        height={10}
                        className="h-6 w-fit"
                        src={imagePreview!}
                        alt="Landerr logo"></Image>
                ) : elements?.logo?.src ? (
                    <Image
                        width={10}
                        height={10}
                        className="h-6 w-fit"
                        src={elements?.logo?.src!}
                        alt="Landerr logo"></Image>
                ) : null}
            </div>
            <div className="space-y-16 md:flex gap-8 mb-6">
                {elements?.section?.main && (
                    <>
                        <div className="flex-[3_3_0%] flex flex-col space-y-6 md:space-y-8">
                            {elements.section?.main?.title && (
                                <h3 className="text-3xl md:text-4xl lg:text-5xl w-4/5">
                                    {elements.section.main.title}
                                </h3>
                            )}
                            {elements.section?.main?.description && (
                                <p className="">{elements.section?.main?.description}</p>
                            )}
                            {elements.section?.main?.ctaButton?.label && (
                                <Button className="w-fit rounded-3xl mt-2 flex space-x-2 lg:p-8 group">
                                    <span>{elements.section?.main?.ctaButton?.label}</span>
                                    <ArrowRight
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                        size={16}
                                    />
                                </Button>
                            )}
                            {elements.section?.main?.privacyAndPolicy?.label && (
                                <p className="text-sm underline"></p>
                            )}
                        </div>
                        {elements.section?.contact && (
                            <ul className="flex-1 space-y-6">
                                <h4 className="text-lg font-bold">Contact Us</h4>
                                <li className="underline">{elements.section?.contact?.mail}</li>
                                <li>{elements.section?.contact?.phone}</li>
                                <li>{elements.section?.contact?.address}</li>
                            </ul>
                        )}
                    </>
                )}
                <div className="flex md:flex-[2_2_0%] gap-8">
                    {elements?.section?.services && (
                        <ul className="flex-1 space-y-6">
                            <h4 className="text-lg font-bold">Services</h4>
                            {elements.section?.services?.map((service) => (
                                <li key={service.label} className="">
                                    {service.label}
                                </li>
                            ))}
                        </ul>
                    )}
                    {elements?.section?.social && (
                        <ul className="flex-1 space-y-6">
                            <h4 className="text-lg font-bold">Social</h4>
                            {elements.section?.social?.map((social) => (
                                <li key={social.label} className="flex items-center gap-2 group">
                                    <span>{social.label}</span>
                                    <ArrowRight
                                        size={20}
                                        className="-rotate-45 text-slate-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {elements?.section?.main?.copyright && (
                <p className="text-sm text-slate-600 mt-10 md:my-6">
                    {elements.section?.main?.copyright}
                </p>
            )}
        </footer>
    );
};

export default Footer;
