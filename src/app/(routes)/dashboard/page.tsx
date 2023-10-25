import Image from "next/image";

import { Card } from "@/components/ui/card";
import NewProjectForm from "@/components/new-project-form";
import { getProjectByUserAction } from "@/app/_actions/project";
import Link from "next/link";

import moment from "moment";
import { Button } from "@/components/ui/button";
import { PenSquare, View } from "lucide-react";

type Props = {};

const DashboardPage = async (props: Props) => {
    const projectList = await getProjectByUserAction();
    console.log(projectList);
    return (
        <>
            <h2 className="mt-8 text-lg font-semibold">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 py-12 w-full">
                <NewProjectForm />
                {Array.isArray(projectList) &&
                    projectList.map((project) => (
                        <Card className="w-full aspect-video hover:bg-slate-300/10 rounded-md p-4 flex flex-col justify-between ">
                            <div>
                                <div className="flex justify-between items-center">
                                    <h5 className="font-semibold w-full truncate">{project.title}</h5>
                                    {project.isPublished ? (
                                        <span className="px-2 py-1 rounded-sm text-xs bg-green-700 text-white">
                                            Live
                                        </span>
                                    ) : (
                                        <span className="px-2 py-1 rounded-sm text-xs bg-red-800 text-white">
                                            Draft
                                        </span>
                                    )}
                                </div>
                                <p className="text-zinc-500 text-xs">
                                    Last edited {moment(project.updatedAt).fromNow()}
                                </p>
                            </div>
                            <div>
                                <p className="text-zinc-400 dark:text-zinc-600 mb-2 text-sm w-full truncate">{project.description}</p>
                                <div className="flex gap-2">
                                    {project.isPublished && (
                                        <Link href={`/project/edit/${project.id}`} className="w-full">
                                            <Button className="w-full">
                                                View &nbsp; <View size={16} />
                                            </Button>
                                        </Link>
                                    )}
                                    <Link href={`/project/edit/${project.id}`} className="w-full">
                                        <Button className="w-full">
                                            Edit &nbsp; <PenSquare size={16} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
            </div>
        </>
    );
};

export default DashboardPage;
