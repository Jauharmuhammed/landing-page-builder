import React, { useEffect } from "react";

import * as z from "zod";
import { useSelector, useDispatch } from "react-redux";

import { UseFormReturn, useFieldArray } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { layoutReducer } from "../../../types/types";
import {
    updateNavbarLinkAdd,
    updateNavbarLinkLabel,
    updateNavbarLinkRemove,
    updateNavbarLinkTo,
} from "@/store/layoutSlice";
import { navbarFromSchema } from "@/lib/validations";

type Props = {
    form: UseFormReturn<z.infer<typeof navbarFromSchema>, any, undefined>;
};

const LinkFields = ({ form }: Props) => {
    const navbarLinks = useSelector(
        (state: layoutReducer) => state.layout.elements?.navbar?.links || []
    );
    const dispatch = useDispatch();
    const { fields, append, remove } = useFieldArray({
        name: "urls",
        control: form.control,
    });

    useEffect(() => {
        navbarLinks.forEach((links, index) => {
            append({ label: links.label, link: "links.link" });
        });
        remove(navbarLinks.length);
    }, []);

    return (
        <div>
            <FormField
                control={form.control}
                name="links"
                render={({ field }) => (
                    <FormItem className="flex-1 mb-3">
                        <FormLabel>Navigation</FormLabel>
                        <FormDescription>
                            Add links to pages or sections to navigate.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {fields.map((field, index) => (
                <div key={field.id} className="flex gap-4 items-center w-full">
                    <FormField
                        control={form.control}
                        name={`links.${index}.label`}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel className={cn(index !== 0 && "sr-only")}>
                                    Label
                                </FormLabel>
                                <FormDescription className={cn(index !== 0 && "sr-only")}>
                                    Labels shows up in the navbar.
                                </FormDescription>
                                <FormControl>
                                    <Input
                                        placeholder="About us"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            dispatch(
                                                updateNavbarLinkLabel({
                                                    index: index,
                                                    value: e.target.value,
                                                })
                                            );
                                        }}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`links.${index}.link`}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel className={cn(index !== 0 && "sr-only")}>Link</FormLabel>
                                <FormDescription className={cn(index !== 0 && "sr-only")}>
                                    Link destinations to pages or sections.
                                </FormDescription>
                                <FormControl>
                                    <Input
                                        placeholder="#about or /about"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            dispatch(
                                                updateNavbarLinkTo({
                                                    index: index,
                                                    value: e.target.value,
                                                })
                                            );
                                        }}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {
                        <Trash
                            size={18}
                            className="self-end mb-3 cursor-pointer"
                            onClick={() => {
                                remove(index);
                                dispatch(updateNavbarLinkRemove(index));
                            }}
                        />
                    }
                </div>
            ))}
            <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => {
                    if (navbarLinks.length === 5) {
                        form.setError("links", { message: "Maximum of 5 links." });
                        return;
                    }
                    append({ label: "", link: "" });
                    dispatch(updateNavbarLinkAdd());
                }}>
                Add Links
            </Button>
        </div>
    );
};

export default LinkFields;
