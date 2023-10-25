import React, { useEffect } from "react";
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
import { Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
    form: any;
    fieldname: string;
    label: string;
    src: string | undefined;
    description: string;
    square?: boolean;
};

const ImageInput = ({ form, fieldname, label, src, description, square = false }: Props) => {
    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === fieldname);
        return imageElement ? imageElement.url : null;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (src && !imagePreview) {
            dispatch(
                setImagePreview({
                    key: fieldname,
                    url: src,
                    filename: "logo.png",
                })
            );
        }
    }, []);

    return (
        <div className="gap-4 h-full">
            <FormField
                control={form.control}
                name={fieldname}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input
                                id="image"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                {...field}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    dispatch(
                                        setImagePreview({
                                            url: URL.createObjectURL(file!),
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
            {imagePreview ? (
                <div
                    className={cn(
                        "px-4 py-2.5 my-auto border rounded-md h-28 mt-2 relative",
                        square && "p-0 rounded-3xl aspect-square w-full h-full"
                    )}>
                    <Image
                        width={square ? 500 : 100}
                        height={square ? 500 : 100}
                        className={cn(
                            "m-auto h-full object-contain",
                            square && "object-cover w-full rounded-3xl"
                        )}
                        src={imagePreview}
                        alt="preview"
                    />
                    <Button
                        onClick={() => dispatch(setImagePreview({ key: fieldname }))}
                        size={"icon"}
                        variant={"link"}
                        className="absolute top-0 right-0">
                        <X size={18} />
                    </Button>
                </div>
            ) : (
                <label
                    htmlFor="image"
                    className="px-4 py-2.5 my-auto border rounded-md h-28 mt-2 flex justify-center items-center cursor-pointer">
                    <Plus size={20} />
                    <span className="text-sm">&nbsp; Add Logo</span>
                </label>
            )}
        </div>
    );
};

export default ImageInput;
