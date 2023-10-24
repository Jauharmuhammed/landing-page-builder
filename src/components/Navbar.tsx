"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

type Props = {};

const Navbar = (props: Props) => {
    const { resolvedTheme } = useTheme();
    return (
        <header className="w-full py-4 md:py-6 flex justify-between items-center">
            <div className="flex space-x-4">
                <Image
                    width={100}
                    height={100}
                    className="h-6 w-fit"
                    src={
                        resolvedTheme === "dark"
                            ? "/images/landerr-text-mark-dark-theme.png"
                            : "/images/landerr-text-mark-light-theme.png"
                    }
                    alt="Landerr logo"></Image>
            </div>
            <ul className="hidden md:flex space-x-16 items-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex space-x-4">
                <ModeToggle />
                <Link href="/api/auth/signout">
                    <Button>Sign Out</Button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
