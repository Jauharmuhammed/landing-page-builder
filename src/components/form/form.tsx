"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import ActionButtonInput from "./navbar/action-button-fields";
import { navbarFromSchema } from "@/lib/validations";

export default function PageForm() {
    const form = useForm<z.infer<typeof navbarFromSchema>>({
        resolver: zodResolver(navbarFromSchema),
    });

    function onSubmit(values: z.infer<typeof navbarFromSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <ActionButtonInput form={form} />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
