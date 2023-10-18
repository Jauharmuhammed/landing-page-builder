import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <header className="w-full py-6 px-12 flex justify-between items-center">
            <div className="flex space-x-4">
                <Image
                    width={10}
                    height={10}
                    className="h-6 w-fit"
                    src={"images/landerr.svg"}
                    alt="Landerr logo"></Image>
            </div>
            <ul className="flex space-x-16 items-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex space-x-4">
                <Button>Login</Button>
            </div>
        </header>
    );
};

export default Navbar;
