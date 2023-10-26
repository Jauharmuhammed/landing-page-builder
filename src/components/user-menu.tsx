"user client";

import React from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "./ui/menubar";
import UserAvatar from "./user-avatar";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { User } from "next-auth";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";

type Props = {};

const UserMenu = ({}: Props) => {
    const { setTheme, theme } = useTheme();
    const { data: session } = useSession();
    return (
        <Menubar className="border-0 p-0">
            <MenubarMenu>
                <MenubarTrigger>
                    <UserAvatar />
                </MenubarTrigger>
                <MenubarContent side="bottom" align="end">
                    {session?.user && (
                        <>
                            <MenubarItem disabled className="flex flex-col items-start pb-4 pr-4">
                                <div className="">{session?.user.name}</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-500">
                                    {session?.user.email}
                                </div>
                            </MenubarItem>
                            <MenubarSeparator />
                        </>
                    )}
                    <MenubarItem>
                        <Link href="/">Home</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href="/dashboard">Dashboard</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href="/explore">Explore</Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Theme</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarRadioGroup value={theme}>
                                <MenubarRadioItem value="light" onClick={() => setTheme("light")}>
                                    Light
                                </MenubarRadioItem>
                                <MenubarRadioItem value="dark" onClick={() => setTheme("dark")}>
                                    Dark
                                </MenubarRadioItem>
                                <MenubarRadioItem value="system" onClick={() => setTheme("system")}>
                                    System
                                </MenubarRadioItem>
                            </MenubarRadioGroup>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    {session?.user && (
                        <MenubarItem>
                            <Link href="/api/auth/signout">Sign Out</Link>
                            <MenubarShortcut>
                                <LogOut size={16} />
                            </MenubarShortcut>
                        </MenubarItem>
                    )}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default UserMenu;
