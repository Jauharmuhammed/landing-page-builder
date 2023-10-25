"use client";

import * as z from "zod";

export const navbarFromSchema = z.object({
    logo: z.custom(),
    navbarLabel: z.string().min(2, {
        message: "Label must be at least 2 characters.",
    }),
    links: z
        .array(
            z.object({
                label: z
                    .string()
                    .min(2, { message: "Label must be at least 2 characters." })
                    .max(15, { message: "Label cannot be more than 15 characters." }),
                link: z
                    .string()
                    .min(1, { message: "link must be at least 1 characters." })
                    .max(255, { message: "link cannot be more than 255 characters." }),
            })
        )
        .refine((input) => (input ? input.length <= 5 : true), {
            message: "The combined length of enumInput and customInput may not be longer than 5",
        })
        .optional(),
});

export const headerFromSchema = z.object({
    heroImage: z.custom(),
    heading: z
        .string()
        .min(2, {
            message: "Heading must be at least 2 characters.",
        })
        .max(30),
    description: z
        .string()
        .min(2, {
            message: "description must be at least 2 characters.",
        })
        .max(60)
        .optional(),
    ctaButton: z.object({
        label: z
            .string()
            .min(2, { message: "Label must be at least 2 characters." })
            .max(15, { message: "Label cannot be more than 15 characters." }),
        link: z
            .string()
            .min(1, { message: "link must be at least 1 characters." })
            .max(255, { message: "link cannot be more than 255 characters." }),
    }),
});

export const footerFromSchema = z.object({
    logo: z.custom(),
    main: z.object({
        title: z
            .string()
            .min(2, {
                message: "Title must be at least 2 characters.",
            })
            .max(20),
        description: z
            .string()
            .min(2, {
                message: "Description must be at least 2 characters.",
            })
            .max(30)
            .optional(),
        copyRight: z
            .string()
            .min(2, {
                message: "Copy Right must be at least 2 characters.",
            })
            .max(30)
            .optional(),
        privacyAndPolicy: z.object({
            label: z
                .string()
                .min(2, { message: "Label must be at least 2 characters." })
                .max(15, { message: "Label cannot be more than 15 characters." }),
            link: z
                .string()
                .min(1, { message: "link must be at least 1 characters." })
                .max(255, { message: "link cannot be more than 255 characters." }),
        }),
    }),
    ctaButton: z.object({
        label: z
            .string()
            .min(2, { message: "Label must be at least 2 characters." })
            .max(15, { message: "Label cannot be more than 15 characters." }),
        link: z
            .string()
            .min(1, { message: "link must be at least 1 characters." })
            .max(255, { message: "link cannot be more than 255 characters." }),
    }),
    contact: z.object({
        mail: z.string().includes("@").optional(),
        phone: z.string().min(10).max(15).optional(),
        address: z.string().min(10).max(50).optional(),
    }),
    social: z.array(
        z.object({
            label: z
                .string()
                .min(2, { message: "Label must be at least 2 characters." })
                .max(15, { message: "Label cannot be more than 15 characters." }),
            link: z
                .string()
                .min(1, { message: "link must be at least 1 characters." })
                .max(255, { message: "link cannot be more than 255 characters." }),
        })
    ),
    services: z.array(
        z.object({
            label: z
                .string()
                .min(2, { message: "Label must be at least 2 characters." })
                .max(15, { message: "Label cannot be more than 15 characters." }),
            link: z
                .string()
                .min(1, { message: "link must be at least 1 characters." })
                .max(255, { message: "link cannot be more than 255 characters." }),
        })
    ),
});
