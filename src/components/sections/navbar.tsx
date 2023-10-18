import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

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
    return (
        <nav className="w-full py-7 px-12 flex justify-between items-center">
            <div className="flex space-x-4">
                <Image
                    width={10}
                    height={10}
                    className="h-6 w-fit"
                    src={elements.logo.src}
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
