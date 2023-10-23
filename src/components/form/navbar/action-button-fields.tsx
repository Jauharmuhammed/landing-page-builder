import React, { useEffect } from "react";

import * as z from "zod";

import TextInput from "../text-input";
import { useSelector, useDispatch } from "react-redux";
import { updateNavbarActionLabel } from "@/store/layoutSlice";

import { UseFormReturn } from "react-hook-form";
import { layoutReducer } from "../../../types/types";
import { formSchema } from "@/app/project/edit/[id]/constants";

type Props = {
    form: UseFormReturn<z.infer<typeof formSchema>, any, undefined>;
};

const ActionButtonFields = ({ form }: Props) => {
    const navbar = useSelector((state: layoutReducer) => state.layout.elements.navbar);
    const dispatch = useDispatch();
    form.setValue("navbarLabel", navbar?.actions?.[0]?.label || "");

    return (
        <>
            <TextInput
                form={form}
                fieldname="navbarLabel"
                onChange={(value) => dispatch(updateNavbarActionLabel(value))}
                label="Action button label"
                placeholder="Sing in"
                description="This will be the label for the action button on navbar."
            />
        </>
    );
};

export default ActionButtonFields;
