import landingPageData from "@/data/landing-page";
import { createSlice } from "@reduxjs/toolkit";

const initialState = landingPageData;

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        updateNavbarActionLabel: (state, action) => {
            state.elements.navbar.actions[0].label = action.payload;
        },
        updateNavbarLinkLabel: (state, action) => {
            const { index, value } = action.payload;
            state.elements.navbar.links[index].label = value;
        },
        updateNavbarLinkTo: (state, action) => {
            const { index, value } = action.payload;
            state.elements.navbar.links[index].link = value;
        },
        updateNavbarLinkAdd: (state, action) => {
            state.elements.navbar.links.push({ label: "", link: "" });
        },
        updateNavbarLinkRemove: (state, action) => {
            state.elements.navbar.links.splice(action.payload, 1);
        },
    },
});

export const {
    updateNavbarActionLabel,
    updateNavbarLinkLabel,
    updateNavbarLinkTo,
    updateNavbarLinkAdd,
    updateNavbarLinkRemove,
} = layoutSlice.actions;
export default layoutSlice.reducer;
