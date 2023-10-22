"use client";

import React from "react";

import Image from "next/image";

import { Card } from "@/components/ui/card";

import NewProjectForm from "@/components/new-project-form";

type Props = {};

const DashboardPage = (props: Props) => {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 p-12">
            <NewProjectForm />

            <Card className="aspect-video overflow-hidden">
                <Image
                    className="h-full w-full object-cover"
                    height={200}
                    width={200}
                    src={"/images/hero-image1.jpeg"}
                    alt="banner"></Image>
            </Card>
            <Card className="aspect-video overflow-hidden">
                <Image
                    className="h-full w-full object-cover"
                    height={200}
                    width={200}
                    src={"/images/hero-image2.jpeg"}
                    alt="banner"></Image>
            </Card>
            <Card className="aspect-video overflow-hidden">
                <Image
                    className="h-full w-full object-cover"
                    height={200}
                    width={200}
                    src={"/images/hero-image3.jpeg"}
                    alt="banner"></Image>
            </Card>
        </div>
    );
};

export default DashboardPage;
