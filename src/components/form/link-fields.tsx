import React, { useEffect } from "react";

import { useFieldArray } from "react-hook-form";
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
import { link } from "../../types/types";

type Props = {
    form: any;
    fieldName: string;
    valueArray: { label: string; link: string }[] | link[];
    label: string;
    description: string;
    labelOnChange: (value: string, index: number) => void;
    linkOnChange: (value: string, index: number) => void;
    addFieldAction: () => void;
    removeFieldAction: (index: number) => void;
};

const LinkFields = ({
    form,
    fieldName,
    valueArray,
    label,
    description,
    labelOnChange,
    linkOnChange,
    addFieldAction,
    removeFieldAction,
}: Props) => {
    const { fields, append, remove } = useFieldArray({
        name: fieldName,
        control: form.control,
    });

    useEffect(() => {
        if (fieldName !== "link") return;
        valueArray?.forEach((links, index) => {
            append({ label: links.label, link: links.link });
        });
        remove(valueArray?.length);
    }, []);

    return (
        <div>
            <FormField
                control={form.control}
                name={fieldName}
                render={({ field }) => (
                    <FormItem className="flex-1 mb-3">
                        <FormLabel>{label}</FormLabel>
                        <FormDescription>{description}</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {fields.map((field, index) => (
                <div key={field.id} className="flex gap-4 items-center w-full">
                    <FormField
                        control={form.control}
                        name={`${fieldName}.${index}.label`}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel className={cn(index !== 0 && "sr-only")}>
                                    Label
                                </FormLabel>
                                <FormDescription className={cn(index !== 0 && "sr-only")}>
                                    Labels shows up in the link.
                                </FormDescription>
                                <FormControl>
                                    <Input
                                        placeholder="About us"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            labelOnChange(e.target.value, index);
                                        }}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${fieldName}.${index}.link`}
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
                                            linkOnChange(e.target.value, index);
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
                                removeFieldAction(index);
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
                    if (valueArray?.length === 5) {
                        form.setError(fieldName, { message: "Maximum of 5 links." });
                        return;
                    }
                    append({ label: "", link: "" });
                    addFieldAction();
                }}>
                Add Links
            </Button>
        </div>
    );
};

export default LinkFields;
