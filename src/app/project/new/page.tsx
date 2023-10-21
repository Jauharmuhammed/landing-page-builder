"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema } from "@/app/project/new/constants";
import ActionButtonFields from "@/components/form/navbar/action-button-fields";
import LogoFields from "@/components/form/navbar/logo-fields";
import { ImageElementStore } from "@/store/imageSlice";
import LinkFields from "@/components/form/navbar/link-fields";
import { layoutReducer } from "../../../../types";

export default function NavbarForm() {
    const navbarLinks = useSelector((state: layoutReducer) => state.layout.elements.navbar.links);

    type formSchemaValues = z.infer<typeof formSchema>;

    const defaultValues: Partial<formSchemaValues> = {
        links: navbarLinks.map((link) => ({ label: link.label, link: link.link })),
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === "logo");
        return imageElement ? imageElement.content : null;
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (!imagePreview) {
            form.setError("logo", { message: "Image is required" });
        }
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <LogoFields form={form} />
                <ActionButtonFields form={form} />
                <LinkFields form={form} />
                <Button type="submit">Save</Button>
            </form>
        </Form>
    );
}
