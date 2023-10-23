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
import { layoutReducer } from "@/types/types";

type Props = {
    form: any;
    fieldname: string;
    label: string;
    placeholder: string;
    description: string;
    onChange: (value: string) => void;
};

const ImageInput = ({ form, fieldname, label, placeholder, description, onChange }: Props) => {
    const navbarLogo = useSelector(
        (state: layoutReducer) => state.layout.elements.navbar?.logo?.src
    );
    const imagePreview = useSelector((state: ImageElementStore) => {
        const imageElement = state.image.find((element) => element.key === fieldname);
        return imageElement ? imageElement.url : null;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (navbarLogo && !imagePreview) {

            dispatch(
                setImagePreview({
                    key: fieldname,
                    url: navbarLogo,
                    filename: "logo.png",
                })
            );
        }
    }, []);

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
                                id="logo-image"
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
                <div className="px-4 py-2.5 my-auto border rounded-md h-28 mt-2 relative">
                    <Image
                        width={100}
                        height={100}
                        className="m-auto h-full max-h-20 object-contain "
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
                    htmlFor="logo-image"
                    className="px-4 py-2.5 my-auto border rounded-md h-28 mt-2 flex justify-center items-center cursor-pointer">
                    <Plus size={20} />
                    <span className="text-sm">&nbsp; Add Logo</span>
                </label>
            )}
        </div>
    );
};

export default ImageInput;
