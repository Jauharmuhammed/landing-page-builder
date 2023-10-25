"use client";

import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import landingPage from "@/data/landing-page";
import { useTheme } from "next-themes";

import { SiNextdotjs } from "react-icons/si";

type Props = {};

const Footer = ({}: Props) => {
    const elements = landingPage.elements.footer;
    const { resolvedTheme } = useTheme();

    return (
        <footer id="footer" className="">
            <div className="my-12 md:mb-24">
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
            </div>
            <div className="space-y-16 md:space-y-0 md:flex gap-8 mb-6">
                {elements.section?.main && (
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
                                <Button
                                    variant={"primary"}
                                    className="w-fit rounded-3xl mt-2 flex space-x-2 lg:p-8 group">
                                    <span>{elements.section?.main?.ctaButton?.label}</span>
                                    <ArrowRight
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                        size={16}
                                    />
                                </Button>
                            )}
                            {elements.section?.main?.privacyAndPolicy?.label && (
                                <p className="text-sm underline md:pt-12">
                                    {elements.section?.main?.privacyAndPolicy?.label}
                                </p>
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
                    {elements.section?.services && (
                        <ul className="flex-1 space-y-6">
                            <h4 className="text-lg font-bold">Services</h4>
                            {elements.section?.services?.map((service) => (
                                <li key={service.label} className="">
                                    {service.label}
                                </li>
                            ))}
                        </ul>
                    )}
                    {elements.section?.social && (
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
            <div className="w-full py-3 flex items-center text-sm dark:text-slate-300">
                <span>Made with</span>
                &nbsp;&nbsp;
                <SiNextdotjs />
                &nbsp; by
                <a target="_blank" href="https://jauharmuhammed.com" className="text-blue-600">
                    &nbsp;Jauhar Muhammed
                </a>
            </div>
            <div className="text-slate-600 text-xs mb-12">
                Landerr ©{new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
