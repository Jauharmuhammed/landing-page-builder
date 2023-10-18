import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type links = {
    label: string;
    link: string;
};

type Props = {
    elements: {
        logo: {
            src: string;
        };
        section: {
            main: {
                title: string;
                description: string;
                ctaButton: {
                    label: string;
                    link: string;
                    varient: string;
                };
                copyright: string;
                privacyAndPolicy: {
                    label: string;
                    link: string;
                };
            };
            contact: {
                mail: string;
                phone: string;
                address: string;
            };
            social: links[];
            services: links[];
        };
    };
};

const Footer = ({ elements }: Props) => {
    const {
        section: { main, contact, services, social },
    } = elements;

    return (
        <footer className="p-12">
            <div className="my-12">
                <Image
                    width={10}
                    height={10}
                    className="h-6 w-fit"
                    src={elements.logo.src}
                    alt="Landerr logo"></Image>
            </div>
            <div className="flex gap-8">
                <div className="flex-[3_3_0%] flex flex-col space-y-8">
                    <h3 className="text-5xl w-4/5">{main.title}</h3>
                    <p className="">{main.description}</p>
                    <Button className="w-fit rounded-3xl mt-2 flex space-x-2 p-8 group" size={"lg"}>
                        <span>{main.ctaButton.label}</span>
                        <ArrowRight
                            className="group-hover:translate-x-1 transition-transform duration-300"
                            size={16}
                        />
                    </Button>
                    <p className="text-sm underline">{main.privacyAndPolicy.label}</p>
                    <p className="text-sm text-slate-600">{main.copyright}</p>
                </div>
                <ul className="flex-1 space-y-6">
                    <h4 className="text-lg font-bold">Contact Us</h4>
                    <li className="underline">{contact.mail}</li>
                    <li>{contact.phone}</li>
                    <li>{contact.address}</li>
                </ul>
                <ul className="flex-1 space-y-6">
                    <h4 className="text-lg font-bold">Services</h4>
                    {services.map((service) => (
                        <li key={service.label} className="">
                            {service.label}
                        </li>
                    ))}
                </ul>
                <ul className="flex-1 space-y-6">
                    <h4 className="text-lg font-bold">Social</h4>
                    {social.map((social) => (
                        <li key={social.label} className="flex items-center gap-2 group">
                            <span>{social.label}</span>
                            <ArrowRight size={20} className="-rotate-45 text-slate-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
