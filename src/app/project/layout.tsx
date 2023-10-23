"use client";

import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ProjectLayout;
