import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ImageElementStore } from "@/store/imageSlice";
import { useSelector } from "react-redux";
import { navbar } from "@/types/types";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type Props = {
    elements?: navbar;
    projectId: string;
};

const Navbar = ({ elements, projectId }: Props) => {
    console.log(projectId);
    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === `logo-${projectId}`);
        return imageElement ? imageElement.url : null;
    });

    if (!elements) {
        return null;
    }

    return (
        <nav className="w-full py-3 md:py-7 flex justify-between items-center relative">
            <Sheet>
                <div className="flex space-x-1 items-center">
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant={"ghost"} size={"icon"}>
                            <Menu size={18} />
                        </Button>
                    </SheetTrigger>
                    {imagePreview ? (
                        <Image
                            width={100}
                            height={100}
                            className="h-5 md:h-6 w-fit"
                            src={imagePreview!}
                            alt="Landerr logo"
                        />
                    ) : null}
                </div>
                {elements.links && (
                    <ul className="hidden md:flex space-x-16 items-center">
                        {elements.links.map((link) => (
                            <li key={link.label}>{link.label}</li>
                        ))}
                    </ul>
                )}
                <SheetContent side={"left"} className="md:hidden ">
                    {elements.links && (
                        <ul className="flex-col space-y-2 items-center mt-16">
                            {elements.links.map((link) => (
                                <li
                                    key={link.label}
                                    className="p-4 cursor-pointer rounded-md hover:bg-slate-500/10">
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </SheetContent>
                {elements.actions && (
                    <div className="flex space-x-4">
                        {elements.actions.map((action) => (
                            <Button className="rounded-full" key={action.label}>
                                {action.label}
                            </Button>
                        ))}
                    </div>
                )}
            </Sheet>
        </nav>
    );
};

export default Navbar;
