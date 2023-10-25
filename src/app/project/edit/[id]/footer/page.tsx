"use client";

import * as z from "zod";
import axios from "axios";
import { useParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import LinkFields from "@/components/form/link-fields";

import { updateProjectLayoutAction } from "@/app/_actions/project";
import { ImageElementStore } from "@/store/imageSlice";
import {
    updateFooterAddress,
    updateFooterCopyRight,
    updateFooterCtaButtonLabel,
    updateFooterCtaButtonLink,
    updateFooterDescription,
    updateFooterMail,
    updateFooterPhone,
    updateFooterPrivacyAndPolicyLabel,
    updateFooterPrivacyAndPolicyLink,
    updateFooterServicesLinkAdd,
    updateFooterServicesLinkLabel,
    updateFooterServicesLinkRemove,
    updateFooterServicesLinkTo,
    updateFooterSocialLinkAdd,
    updateFooterSocialLinkLabel,
    updateFooterSocialLinkRemove,
    updateFooterSocialLinkTo,
    updateFooterTitle,
    updateNavbarLogo,
} from "@/store/layoutSlice";
import { layoutReducer } from "@/types/types";

import { Loader2 } from "lucide-react";
import cloneDeep from "lodash/cloneDeep";
import ImageInput from "@/components/form/image-input";
import TextInput from "@/components/form/text-input";
import { footerFromSchema } from "@/lib/validations";

export default function NavbarForm() {
    const params = useParams();
    const footer = useSelector((state: layoutReducer) => state.layout.elements.footer);
    const data = useSelector((state: layoutReducer) => state.layout);
    const dispatch = useDispatch();

    type formSchemaValues = z.infer<typeof footerFromSchema>;

    const defaultValues: Partial<formSchemaValues> = {
        social: footer?.section?.social?.map((link) => ({
            label: link.label || "",
            link: link.link || "",
        })),
        services: footer?.section?.services?.map((link) => ({
            label: link.label || "",
            link: link.link || "",
        })),
        main: {
            title: footer?.section?.main?.title || "",
            description: footer?.section?.main?.description || "",
            copyRight: footer?.section?.main?.copyright || "",
            privacyAndPolicy: {
                label: footer?.section?.main?.privacyAndPolicy?.label || "",
                link: footer?.section?.main?.privacyAndPolicy?.link || "",
            },
        },
        contact: {
            mail: footer?.section?.contact?.mail || "",
            phone: footer?.section?.contact?.phone || "",
            address: footer?.section?.contact?.address || "",
        },
        ctaButton: {
            label: footer?.section?.main?.ctaButton?.label || "",
            link: footer?.section?.main?.ctaButton?.link || "",
        },
    };

    const form = useForm<z.infer<typeof footerFromSchema>>({
        resolver: zodResolver(footerFromSchema),
        defaultValues,
    });

    const navbarLogo = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find(
            (element) => element.key === `footer-logo-${params.id}`
        );
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

    async function onSubmit(values: z.infer<typeof footerFromSchema>) {
        try {
            if (!navbarLogo && !data.elements.navbar?.logo?.src) {
                form.setError("logo", { message: "Image is required" });
            }

            let url;
            if (navbarLogo) {
                url = await uploadImage(await getImageBlob(navbarLogo));
            }

            const newData = cloneDeep(data);

            newData.elements.footer = newData.elements.footer || {};
            newData.elements.footer.logo = newData.elements.footer.logo || { src: "" };
            newData.elements.footer.logo.src = url;

            await updateProjectLayoutAction(params.id as string, newData);

            console.log(newData);
        } catch (error) {
            console.log("[FOOTER_LAYOUT_SAVE_ERROR]", error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <ImageInput
                    form={form}
                    fieldname={`footer-logo-${params.id}`}
                    label="Logo"
                    description="This will be the logo for the footer."
                    src={footer?.logo?.src}
                />
                <TextInput
                    form={form}
                    fieldname="main.title"
                    onChange={(value) => dispatch(updateFooterTitle(value))}
                    label="Title"
                    placeholder=""
                    description="This will be the title text of the footer."
                />
                <div className="md:flex gap-4 w-full">
                    <TextInput
                        form={form}
                        fieldname="ctaButton.label"
                        onChange={(value) => dispatch(updateFooterCtaButtonLabel(value))}
                        label="Button Label"
                        placeholder="CTA Button Label"
                        description="This will be the label of you cta button."
                    />
                    <TextInput
                        form={form}
                        fieldname="ctaButton.link"
                        onChange={(value) => dispatch(updateFooterCtaButtonLink(value))}
                        label="Button Link"
                        placeholder="CTA Button link"
                        description="This will be the link of you cta button."
                    />
                </div>
                <TextInput
                    form={form}
                    fieldname="main.description"
                    onChange={(value) => dispatch(updateFooterDescription(value))}
                    label="Description"
                    placeholder=""
                    description="This will be the description text of the footer."
                />
                <TextInput
                    form={form}
                    fieldname="main.copyRight"
                    onChange={(value) => dispatch(updateFooterCopyRight(value))}
                    label="Copy Right Label"
                    placeholder=""
                    description="This will be the lable for copy right."
                />
                <div className="md:flex gap-4 w-full">
                    <TextInput
                        form={form}
                        fieldname="main.privacyAndPolicy.label"
                        onChange={(value) => dispatch(updateFooterPrivacyAndPolicyLabel(value))}
                        label="Privacy and policy Label"
                        placeholder="Privacy and policy Label"
                        description="This will be the label of you privacy and policy."
                    />
                    <TextInput
                        form={form}
                        fieldname="main.privacyAndPolicy.link"
                        onChange={(value) => dispatch(updateFooterPrivacyAndPolicyLink(value))}
                        label="Privacy and policy Link"
                        placeholder="Privacy and policy link"
                        description="This will be the link of you privacy and policy."
                    />
                </div>
                <h3 className="pt-12 text-lg font-bold">Contact Informations</h3>
                <TextInput
                    form={form}
                    fieldname="contact.mail"
                    onChange={(value) => dispatch(updateFooterMail(value))}
                    label="Mail"
                    placeholder=""
                    description="This will be the mail for contact."
                />
                <TextInput
                    form={form}
                    fieldname="contact.phone"
                    onChange={(value) => dispatch(updateFooterPhone(value))}
                    label="Phone"
                    placeholder=""
                    description="This will be the phone for contact."
                />
                <TextInput
                    form={form}
                    fieldname="contact.address"
                    onChange={(value) => dispatch(updateFooterAddress(value))}
                    label="Address"
                    placeholder=""
                    description="This will be the address for contact."
                />
                <LinkFields
                    form={form}
                    valueArray={footer?.section?.social!}
                    label="Socials"
                    description="Add links to your socials."
                    fieldName="social"
                    labelOnChange={(value, index) =>
                        dispatch(updateFooterSocialLinkLabel({ value, index }))
                    }
                    linkOnChange={(value, index) =>
                        dispatch(updateFooterSocialLinkTo({ value, index }))
                    }
                    removeFieldAction={(index) => dispatch(updateFooterSocialLinkRemove(index))}
                    addFieldAction={() => dispatch(updateFooterSocialLinkAdd())}
                />
                <LinkFields
                    form={form}
                    valueArray={footer?.section?.services!}
                    label="Services"
                    description="Add links to the services."
                    fieldName="services"
                    labelOnChange={(value, index) =>
                        dispatch(updateFooterServicesLinkLabel({ value, index }))
                    }
                    linkOnChange={(value, index) =>
                        dispatch(updateFooterServicesLinkTo({ value, index }))
                    }
                    removeFieldAction={(index) => dispatch(updateFooterServicesLinkRemove(index))}
                    addFieldAction={() => dispatch(updateFooterServicesLinkAdd())}
                />
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
