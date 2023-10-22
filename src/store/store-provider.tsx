"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    <Provider store={store}>{children}</Provider>;
};
