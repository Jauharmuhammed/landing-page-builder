import React from "react";
import TextInput from "../text-input";
import { useSelector, useDispatch } from "react-redux";
import { updateNavbarActionLabel } from "@/store/layoutSlice";

type Props = {
    form: any;
    field: string;
};

const ActionButtonInput = ({ form, field }: Props) => {
    const dispatch = useDispatch();
    return (
        <>
            <TextInput
                form={form}
                fieldname={field}
                onChange={(value) => dispatch(updateNavbarActionLabel(value))}
                label="Action button label"
                placeholder="Sing in"
                description="This will be the label for the action button on navbar."
            />
        </>
    );
};

export default ActionButtonInput;
