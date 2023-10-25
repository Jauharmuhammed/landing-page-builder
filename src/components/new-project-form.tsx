"use client";

import * as z from "zod";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Loader2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { addProjectsAction } from "@/app/_actions/project";
import { useRouter } from "next/navigation";
import { Textarea } from "./ui/textarea";

type Props = {};

export const newProjectFormSchema = z.object({
    title: z
        .string()
        .min(2, {
            message: "Title must be at least 2 characters.",
        })
        .max(15, { message: "Title cannot be longer than 15 characters." }),
    description: z.string().min(5, {
        message: "Title must be at least 2 characters.",
    }),
});

const NewProjectForm = (props: Props) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof newProjectFormSchema>>({
        resolver: zodResolver(newProjectFormSchema),
    });

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values: z.infer<typeof newProjectFormSchema>) {
        const newProjectId = await addProjectsAction(values);
        router.push(`/project/edit/${newProjectId}`);
    }
    return (
        <Dialog>
            <DialogTrigger>
                <div className="p-2 rounded-md cursor-pointer mb-auto h-full">
                    <Card className="aspect-video flex justify-center items-center hover:bg-slate-300/10 ">
                        <Plus size={18} />
                    </Card>
                    <h5 className="text-sm text-left mt-3 text-zinc-300"></h5>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new Project</DialogTitle>
                    <div className="pt-8">
                        <Form {...form}>
                            <form
                                className="flex flex-col space-y-5"
                                onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name={"title"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder={"Type your project title"}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                This will be the title of your project
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"description"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    placeholder={"Type your project title"}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                This will be the description of your project
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button disabled={isLoading} className="self-end">
                                    {isLoading && <Loader2 size={16} className="animate-spin" />}
                                    &nbsp; Create New Project
                                </Button>
                            </form>
                        </Form>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default NewProjectForm;
