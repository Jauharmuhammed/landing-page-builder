import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="min-h-screen w-full flex px-12 gap-12">
            <div className="w-1/2 py-12 flex flex-col space-y-6">
                <h3 className="text-6xl w-4/5">
                    Transform Visitors into Customers with Our Landing Page Builder
                </h3>
                <Button className="w-fit rounded-3xl mt-2" size={"lg"}>
                    Get Started
                </Button>

                <p className="text-gray-700">
                    Experience the power to transform casual visitors into devoted customers with
                    our intuitive Landing Page Builder. Create high-converting landing pages that
                    boost your online success.
                </p>
            </div>
            <div className="w-1/2">
                <Image
                    width={100}
                    height={100}
                    className="w-full aspect-square rounded-3xl"
                    src={"/images/hero-image3.jpeg"}
                    alt="Hero Image"
                />
            </div>
        </section>
    );
};

export default Hero;
