"use client";

import * as z from "zod";
import axios from "axios";
import { useParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import LinkFields from "@/components/form/navbar/link-fields";

import { updateProjectLayoutAction } from "@/app/_actions/project";
import { ImageElementStore } from "@/store/imageSlice";
import { updateNavbarActionLabel, updateNavbarLogo } from "@/store/layoutSlice";
import { layoutReducer } from "@/types/types";

import { Loader2 } from "lucide-react";
import cloneDeep from "lodash/cloneDeep";
import ImageInput from "@/components/form/image-input";
import TextInput from "@/components/form/text-input";
import { navbarFromSchema } from "@/lib/validations";

export default function NavbarForm() {
    const params = useParams();
    const navbarLinks = useSelector(
        (state: layoutReducer) => state.layout.elements.navbar?.links || []
    );
    const navbar = useSelector((state: layoutReducer) => state.layout.elements.navbar);
    const data = useSelector((state: layoutReducer) => state.layout);
    const dispatch = useDispatch();

    type formSchemaValues = z.infer<typeof navbarFromSchema>;

    const defaultValues: Partial<formSchemaValues> = {
        links: navbarLinks.map((link) => ({ label: link.label || "", link: link.link || "" })),
        navbarLabel: navbar?.actions?.[0]?.label || "",
    };

    const form = useForm<z.infer<typeof navbarFromSchema>>({
        resolver: zodResolver(navbarFromSchema),
        defaultValues,
    });

    const navbarLogo = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === `logo-${params.id}`);
        return imageElement ? imageElement.url : null;
    });

    const isLoading = form.formState.isSubmitting;

    const getImageBlob = async (url: string) => {
        const blob = await fetch(url).then((r) => r.blob());
        return blob;
    };

    const uploadImage = async (image: Blob) => {
        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

            const uploadURL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

            const response = await axios.post(uploadURL, formData).catch((err) => console.log(err));
            dispatch(updateNavbarLogo(response?.data?.secure_url));
            return response?.data?.secure_url;
        } catch (error) {
            console.log("[IMAGE_UPLOAD_ERROR]", error);
        }
    };

    async function onSubmit(values: z.infer<typeof navbarFromSchema>) {
        try {
            if (!navbarLogo && !data.elements.navbar?.logo?.src) {
                form.setError("logo", { message: "Image is required" });
            }

            let url;
            if (navbarLogo) {
                url = await uploadImage(await getImageBlob(navbarLogo));
            }

            const newData = cloneDeep(data);

            newData.elements.navbar = newData.elements.navbar || {};
            newData.elements.navbar.logo = newData.elements.navbar.logo || { src: "" };
            newData.elements.navbar.logo.src = url;

            await updateProjectLayoutAction(params.id as string, newData);

            console.log(newData);
        } catch (error) {
            console.log("[NAVBAR_LAYOUT_SAVE_ERROR]", error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <ImageInput
                    form={form}
                    fieldname={`logo-${params.id}`}
                    onChange={(value) => dispatch(updateNavbarActionLabel(value))}
                    label="Logo"
                    description="This will be the label for the action button on navbar."
                />
                <TextInput
                    form={form}
                    fieldname="navbarLabel"
                    onChange={(value) => dispatch(updateNavbarActionLabel(value))}
                    label="Action button label"
                    placeholder="Sing in"
                    description="This will be the label for the action button on navbar."
                />
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
