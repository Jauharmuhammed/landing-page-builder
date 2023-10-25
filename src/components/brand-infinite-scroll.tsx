import brands from "@/data/brands";
import Image from "next/image";
import React from "react";

type Props = {};

const BrandInfiniteScroll = (props: Props) => {
    return (
        <div className="w-full py-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {Array(3)
                .fill(1)
                .map((value) => (
                    <ul
                        key={value}
                        className="flex items-center justify-center md:justify-start animate-infinite-scroll">
                        {brands.map((brand) => (
                            <li className="mx-8 md:mx-16" key={brand.alt}>
                                <Image
                                    className="dark:invert mix-blend-color-burn saturate-0 max-w-none max-h-16 md:max-h-none"
                                    height={100}
                                    width={100}
                                    src={brand.src}
                                    alt={brand.alt}
                                />
                            </li>
                        ))}
                    </ul>
                ))}
        </div>
    );
};

export default BrandInfiniteScroll;
