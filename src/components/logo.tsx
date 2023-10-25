"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
    const { resolvedTheme } = useTheme();

    return (
        <Link href={"/"} className="flex space-x-4">
            <Image
                width={100}
                height={100}
                className="h-6 w-fit"
                src={
                    resolvedTheme === "light"
                        ? "/images/landerr-text-mark-light-theme.png"
                        : "/images/landerr-text-mark-dark-theme.png"
                }
                alt="Landerr logo"></Image>
        </Link>
    );
};

export default Logo;
