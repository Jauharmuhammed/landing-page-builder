"use client";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import ActionButtonFields from "@/components/form/navbar/action-button-fields";
import LogoFields from "@/components/form/navbar/logo-fields";
import { ImageElementStore } from "@/store/imageSlice";
import LinkFields from "@/components/form/navbar/link-fields";

import "dotenv/config";
import { updateNavbarLogo } from "@/store/layoutSlice";
import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { layoutReducer, projectReducer } from "@/types/types";
import { formSchema } from "./constants";

export default function NavbarForm() {
    const navbarLinks = useSelector(
        (state: layoutReducer) => state.layout.elements.navbar?.links || []
    );
    const data = useSelector((state: layoutReducer) => state.layout);
    const newProject = useSelector((state: projectReducer) => state.newProject);
    const dispatch = useDispatch();

    type formSchemaValues = z.infer<typeof formSchema>;

    const defaultValues: Partial<formSchemaValues> = {
        links: navbarLinks.map((link) => ({ label: link.label, link: link.link })),
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const navbarLogo = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === "logo");
        return imageElement ? imageElement.content : null;
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!navbarLogo) {
            form.setError("logo", { message: "Image is required" });
        }

        const formData = new FormData();
        formData.append("file", navbarLogo!);
        formData.append("upload_preset", "landing-page-builder");

        const uploadURL = `https://api.cloudinary.com/v1_1/dpofqivee/image/upload`;

        const response = await axios.post(uploadURL, formData).catch((err) => console.log(err));
        console.log(response?.data?.secure_url);
        dispatch(updateNavbarLogo(response?.data?.secure_url));
        values.logo = response?.data?.secure_url;

        console.log(values);
        if (newProject) {
            //update existing project
        } else {
            // create new project
            // const project = await db.insert(projects).values({ name: 'Andrew' })
        }
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
