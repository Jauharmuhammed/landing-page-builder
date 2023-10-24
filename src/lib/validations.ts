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
    heading: z.string().min(2, {
        message: "Heading must be at least 2 characters.",
    }),
    description: z
        .string()
        .min(2, {
            message: "Heading must be at least 2 characters.",
        })
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
