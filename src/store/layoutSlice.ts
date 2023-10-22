import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageData } from "@/types/types";

const initialState: pageData = {
    styles: {},
    elements: {},
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        updateLayout: (state, action) => {
            state = action.payload;
        },
        updateNavbarActionLabel: (state, action: PayloadAction<string>) => {
            if (state.elements.navbar && state.elements.navbar.actions) {
                state.elements.navbar.actions[0].label = action.payload;
            }
        },
        updateNavbarLinkLabel: (state, action: PayloadAction<{ index: number; value: string }>) => {
            if (state.elements.navbar && state.elements.navbar.links) {
                const { index, value } = action.payload;
                if (state.elements.navbar.links[index]) {
                    state.elements.navbar.links[index].label = value;
                }
            }
        },
        updateNavbarLinkTo: (state, action: PayloadAction<{ index: number; value: string }>) => {
            if (state.elements.navbar && state.elements.navbar.links) {
                const { index, value } = action.payload;
                if (state.elements.navbar.links[index]) {
                    state.elements.navbar.links[index].link = value;
                }
            }
        },
        updateNavbarLinkAdd: (state) => {
            if (state.elements.navbar && state.elements.navbar.links) {
                state.elements.navbar.links.push({ label: "", link: "" });
            }
        },
        updateNavbarLinkRemove: (state, action: PayloadAction<number>) => {
            if (state.elements.navbar && state.elements.navbar.links) {
                state.elements.navbar.links.splice(action.payload, 1);
            }
        },
        updateNavbarLogo: (state, action: PayloadAction<string>) => {
            if (state.elements.navbar && state.elements.navbar.logo) {
                state.elements.navbar.logo.src = action.payload;
            }
        },
    },
});

export const {
    updateLayout,
    updateNavbarActionLabel,
    updateNavbarLinkLabel,
    updateNavbarLinkTo,
    updateNavbarLinkAdd,
    updateNavbarLinkRemove,
    updateNavbarLogo,
} = layoutSlice.actions;

export default layoutSlice.reducer;
