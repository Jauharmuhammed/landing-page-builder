"use client";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import data from "@/data/landing-page";
import { formSchema } from "@/app/project/new/constants";
import ActionButtonInput from "./navbar/action";
import { useState } from "react";
import { layoutReducer } from "../../../types";

export default function PageForm() {
    const [pageData, setpageData] = useState(data);
    const {
        elements: { navbar },
    } = pageData;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: useSelector(
                (state: layoutReducer) => state.layout.elements.navbar.actions[0].label
            ),
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <ActionButtonInput form={form} field={"username"} />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
