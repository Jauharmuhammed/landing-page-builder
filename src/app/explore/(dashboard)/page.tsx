import { getPublishedProjectAction } from "@/app/_actions/project";
import ProjectAvatar from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Fullscreen, Star } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import React from "react";

type Props = {};

const page = async (props: Props) => {
    const data = await getPublishedProjectAction();
    console.log(data);
    return (
        <>
            <h2 className="mt-8 text-lg font-semibold">Explore</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 py-12 w-full">
                {Array.isArray(data) &&
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col space-y-2">
                            <Card
                                key={item.project?.id}
                                className="w-full aspect-video hover:bg-slate-300/10 rounded-md p-4 flex flex-col justify-between ">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-semibold w-full truncate mr-2">
                                            {item.project?.title}
                                        </h5>
                                    </div>
                                    <p className="text-zinc-500 text-xs">
                                        Last edited {moment(item.project?.updatedAt).fromNow()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zinc-400 dark:text-zinc-600 mb-2 text-sm w-full truncate">
                                        {item.project?.description}
                                    </p>
                                    <div className="flex gap-2 text-sm">
                                        {item.project?.isPublished && (
                                            <Link
                                                href={`/explore/${item.project?.id}`}
                                                className="w-full">
                                                <Button className="w-full">
                                                    View &nbsp; <Fullscreen size={16} />
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </Card>
                            <div className="flex items-center justify-between pr-4">
                                <div className="flex space-x-4 items-center">
                                    <ProjectAvatar
                                        src={item.user?.image!}
                                        name={item.user?.name!}
                                    />
                                    <p className="text-sm">{item.user?.name}</p>
                                </div>
                                {/* <Star size={16} className="cursor-pointer" /> */}
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default page;
