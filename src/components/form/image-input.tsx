import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Image from "next/image";
import { ImageElementStore, setImagePreview } from "@/store/imageSlice";

type Props = {
    form: any;
    fieldname: string;
    label: string;
    placeholder: string;
    description: string;
    onChange: (value: string) => void;
};

const ImageInput = ({ form, fieldname, label, placeholder, description, onChange }: Props) => {
    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === fieldname);
        return imageElement ? imageElement.content : null;
    });

    const dispatch = useDispatch();

    return (
        <div className=" gap-4 h-full">
            <FormField
                control={form.control}
                name={fieldname}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input
                                type="file"
                                accept="image/*"
                                {...field}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    const content = file ? URL.createObjectURL(file) : "";
                                    dispatch(
                                        setImagePreview({
                                            content: content,
                                            key: fieldname,
                                            filename: file?.name,
                                        })
                                    );
                                }}
                            />
                        </FormControl>
                        <FormDescription>{description}</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {imagePreview && (
                <div className="px-4 py-2.5 my-auto border rounded-md h-28 mt-2">
                    <Image
                        width={100}
                        height={100}
                        className="my-auto h-full max-h-20"
                        src={imagePreview}
                        alt="preview"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageInput;
