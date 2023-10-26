"use client";

import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {
    src: string;
    name: string;
};

const ProjectAvatar = ({ src, name }: Props) => {
    return (
        <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={src!} />
            <AvatarFallback>{name?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    );
};

export default ProjectAvatar;
