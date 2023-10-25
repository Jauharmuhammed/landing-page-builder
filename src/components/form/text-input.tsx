import React from "react";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type Props = {
    form: any;
    fieldname: string;
    label: string;
    placeholder: string;
    description: string;
    onChange: (value: string) => void;
};

const TextInput = ({ form, fieldname, label, placeholder, description, onChange }: Props) => {
    return (
        <FormField
            control={form.control}
            name={fieldname}
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            onChange={(e) => {
                                field.onChange(e);
                                onChange(e.target.value);
                            }}
                            placeholder={placeholder}
                        />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default TextInput;
