import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { header } from "@/types/types";
import { useSelector } from "react-redux";
import { ImageElementStore } from "@/store/imageSlice";

type Props = {
    elements?: header;
    projectId: string;
};

const Header = ({ elements, projectId }: Props) => {
    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find(
            (element) => element.key === `hero-image-${projectId}`
        );
        return imageElement ? imageElement.url : null;
    });

    return (
        <section className="w-full flex flex-col md:flex-row pb-12 gap-4 md:gap-12">
            <div className="md:w-1/2 pt-12 md:pt-1 xl:py-12 flex flex-col justify-center space-y-6 md:space-y-8 xl:space-y-12">
                {elements?.heading && (
                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl xl:w-4/5">
                        {elements.heading}
                    </h3>
                )}
                {elements?.ctaButton?.label && (
                    <Button className="w-fit rounded-3xl mt-2 flex space-x-2 xl:p-8 group">
                        <span>{elements.ctaButton.label}</span>
                        <ArrowRight
                            className="group-hover:translate-x-1 transition-transform duration-300"
                            size={16}
                        />
                    </Button>
                )}
                {elements?.description && (
                    <p className="text-slate-700 dark:text-slate-300">{elements.description}</p>
                )}
            </div>
            <div className="md:w-1/2 rounded-3xl overflow-hidden h-fit">
                {imagePreview ? (
                    <Image
                        width={500}
                        height={500}
                        className="w-full hover:scale-105 transition-transform duration-300 object-cover ease-in aspect-square"
                        src={imagePreview!}
                        alt="Header Image"
                    />
                ) : (
                    <Image
                        width={500}
                        height={500}
                        className="w-full hover:scale-105 transition-transform duration-300 object-cover ease-in aspect-square"
                        src={elements?.image!}
                        alt="header image"
                    />
                )}
            </div>
        </section>
    );
};

export default Header;
