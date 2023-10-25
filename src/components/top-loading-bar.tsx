"use client";

import { AppProgressBar } from "next-nprogress-bar";


export default function TopLoadingBar() {

    return (
        <>
            <AppProgressBar
                color="#153BFD"
                height="2px"
                options={{ showSpinner: false }}
            />
        </>
    );
}
