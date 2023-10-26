"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const UserAvatar = (props: Props) => {
    const { data: session } = useSession();
    return (
        <Avatar>
            <AvatarImage src={session?.user?.image!} />
            <AvatarFallback>{session?.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
