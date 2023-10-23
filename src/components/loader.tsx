import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";

type Props = {
    fill?: boolean;
};

const Loader = ({ fill = false }: Props) => {
    return (
        <div
            className={cn("h-full w-full flex justify-center items-center", {
                "min-h-screen": fill,
            })}>
            <Loader2 className="animate-spin" />
        </div>
    );
};

export default Loader;
