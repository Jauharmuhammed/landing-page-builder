"use client";

import * as z from "zod";
import React from "react";
import { useSession } from "next-auth/react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
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
import { db } from "@/lib/db";
import { addProjectsAction } from "@/app/action/project";
import { useRouter } from "next/navigation";

type Props = {};

export const newProjectFormSchema = z.object({
    title: z
        .string()
        .min(2, {
            message: "Title must be at least 2 characters.",
        })
        .max(15, { message: "Title cannot be longer than 15 characters." }),
});

const NewProjectForm = (props: Props) => {
    const router = useRouter()
    const form = useForm<z.infer<typeof newProjectFormSchema>>({
        resolver: zodResolver(newProjectFormSchema),
    });

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values: z.infer<typeof newProjectFormSchema>) {
        const newProjectId = await addProjectsAction(values);
        router.push(`/project/edit/${newProjectId}`)
    }
    return (
        <Dialog>
            <DialogTrigger>
                <Card className="aspect-video flex justify-center items-center gap-1 hover:bg-black/5 cursor-pointer">
                    <Plus size={18} />
                    <span>New</span>
                </Card>
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
