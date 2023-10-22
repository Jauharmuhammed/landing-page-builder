import landingPageData from "@/data/landing-page";
import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "newProject",
    initialState: "",
    reducers: {
        setNewProject: (state, action) => {
            state = action.payload;
        },
    },
});

export const {} = projectSlice.actions;
export default projectSlice.reducer;
