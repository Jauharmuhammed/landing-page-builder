"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
    const { data: session } = useSession();
    const [image, setImage] = useState("/animations/hero-animated-entrance.svg");
    useEffect(() => {
        setImage(`/animations/hero-animated-entrance.svg?v=${Math.random()}`);
    }, []);

    return (
        <section className="w-full flex flex-col md:flex-row pb-12 gap-4 md:gap-12">
            <div className="md:w-1/2 pt-12 md:pt-1 xl:py-12 flex flex-col justify-center space-y-6 md:space-y-8 xl:space-y-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl xl:w-4/5">
                    Transform Visitors into Customers with Our Landing Page Builder
                </h3>
                {session?.user ? (
                    <Link className="w-fit" href={"/explore"}>
                        <Button
                            variant={"primary"}
                            className="w-fit rounded-3xl mt-2 flex space-x-2 xl:p-8 group">
                            <span>Explore</span>
                            <ArrowRight
                                className="group-hover:translate-x-1 transition-transform duration-300"
                                size={16}
                            />
                        </Button>
                    </Link>
                ) : (
                    <Link href={"/api/auth/login"}>
                        <Button
                            variant={"primary"}
                            className="w-fit rounded-3xl mt-2 flex space-x-2 xl:p-8 group">
                            <span>Get Started</span>
                            <ArrowRight
                                className="group-hover:translate-x-1 transition-transform duration-300"
                                size={16}
                            />
                        </Button>
                    </Link>
                )}
                <p className="text-slate-700 dark:text-slate-300">
                    Experience the power to transform casual visitors into devoted customers with
                    our intuitive Landing Page Builder. Create high-converting landing pages that
                    boost your online success.
                </p>
            </div>
            <div className="md:w-1/2 rounded-3xl overflow-hidden h-fit">
                <img
                    className="w-full object-cover ease-in aspect-square"
                    src={image}
                    alt="Header Image"
                />
            </div>
        </section>
    );
};

export default Hero;
