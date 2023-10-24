import { Project } from "@/lib/db/schema";
import { createSlice } from "@reduxjs/toolkit";

export type currentProjectStore = {
    currentProject: currentProject;
};

type currentProject = Project;

const initialState: currentProject = {
    id: "",
    userId: "",
    title: "",
    content: {},
    isActive: true,
    isPublished: false,
};

const projectSlice = createSlice({
    name: "currentProject",
    initialState,
    reducers: {
        setCurrentProject: (state, action) => {
            state = action.payload;
        },
    },
});

export const { setCurrentProject } = projectSlice.actions;
export default projectSlice.reducer;
