"use client";

import * as z from "zod";
import axios from "axios";
import { useParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import ActionButtonFields from "@/components/form/navbar/action-button-fields";
import LogoFields from "@/components/form/navbar/logo-fields";
import LinkFields from "@/components/form/navbar/link-fields";

import { updateProjectLayoutAction } from "@/app/_actions/project";
import { ImageElementStore } from "@/store/imageSlice";
import { updateNavbarLogo } from "@/store/layoutSlice";
import { layoutReducer } from "@/types/types";
import { formSchema } from "./constants";

import { Loader2 } from "lucide-react";

export default function NavbarForm() {
    const params = useParams();
    const navbarLinks = useSelector(
        (state: layoutReducer) => state.layout.elements.navbar?.links || []
    );
    const data = useSelector((state: layoutReducer) => state.layout);
    const dispatch = useDispatch();

    type formSchemaValues = z.infer<typeof formSchema>;

    const defaultValues: Partial<formSchemaValues> = {
        links: navbarLinks.map((link) => ({ label: link.label || "", link: link.link || "" })),
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const navbarLogo = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === "logo");
        return imageElement ? imageElement.content : null;
    });

    const isLoading = form.formState.isSubmitting;

    const uploadImage = async (image: Blob) => {
        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "landing-page-builder");

            const uploadURL = `https://api.cloudinary.com/v1_1/dpofqivee/image/upload`;

            const response = await axios.post(uploadURL, formData).catch((err) => console.log(err));
            dispatch(updateNavbarLogo(response?.data?.secure_url));
        } catch (error) {
            console.log("[IMAGE_UPLOAD_ERROR]", error);
        }
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (!navbarLogo && !data.elements.navbar?.logo?.src) {
                form.setError("logo", { message: "Image is required" });
            }

            navbarLogo && (await uploadImage(navbarLogo!));
            await updateProjectLayoutAction(params.id as string, data);

            console.log(data);
        } catch (error) {
            console.log("[NAVBAR_LAYOUT_SAVE_ERROR]", error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <LogoFields form={form} />
                <ActionButtonFields form={form} />
                <LinkFields form={form} />
                <Button disabled={isLoading} type="submit">
                    {isLoading && (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            &nbsp;
                        </>
                    )}
                    Save
                </Button>
            </form>
        </Form>
    );
}
