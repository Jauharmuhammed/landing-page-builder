import Image from "next/image";

import { Card } from "@/components/ui/card";
import NewProjectForm from "@/components/new-project-form";
import { getProjectByUserAction } from "@/app/_actions/project";
import Link from "next/link";

type Props = {};

const DashboardPage = async (props: Props) => {
    const projectList = await getProjectByUserAction();
    console.log(projectList);
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8 p-6">
            <NewProjectForm />

            {Array.isArray(projectList) &&
                projectList.map((project) => (
                    <Link href={`/project/edit/${project.id}`} className="p-2 hover:bg-slate-300/10 rounded-md">
                        <Card className="aspect-video overflow-hidden">
                            <Image
                                className="h-full w-full object-cover"
                                height={200}
                                width={200}
                                src={"/images/hero-image1.jpeg"}
                                alt="banner"></Image>
                        </Card>
                        <h5 className="text-sm mt-2">{project.title}</h5>
                    </Link>
                ))}
        </div>
    );
};

export default DashboardPage;
