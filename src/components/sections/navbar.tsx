import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ImageElementStore } from "@/store/imageSlice";
import { useSelector } from "react-redux";

type Props = {
    elements: {
        logo: {
            src: string;
        };
        links: {
            label: string;
            link: string;
        }[];
        actions: {
            label: string;
            link: string;
            varient: string;
        }[];
    };
};

const Navbar = ({ elements }: Props) => {
    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === "logo");
        return imageElement ? imageElement.content : null;
    });

    return (
        <nav className="w-full py-7 px-12 flex justify-between items-center">
            <div className="flex space-x-4">
                <Image
                    width={10}
                    height={10}
                    className="h-6 w-fit"
                    src={imagePreview ? imagePreview : elements.logo.src}
                    alt="Landerr logo"></Image>
            </div>
            <ul className="flex space-x-16 items-center">
                {elements.links.map((link) => (
                    <li key={link.label}>{link.label}</li>
                ))}
            </ul>
            <div className="flex space-x-4">
                {elements.actions.map((action) => (
                    <Button key={action.label}>{action.label}</Button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
