import { createSlice } from "@reduxjs/toolkit";

export type ImageElementStore = {
    image: ImageElement[];
};

type ImageElement = {
    key: string;
    content: string;
    filename: string;
};

const initialState: ImageElement[] = [];

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setImagePreview: (state, action) => {
            const { key, content, filename } = action.payload;

            const index = state.findIndex((element) => element.key === key);

            if (index !== -1) {
                state[index] = { ...state[index], content };
            } else {
                state.push({ key, content, filename });
            }
        },
    },
});

export const { setImagePreview } = imageSlice.actions;
export default imageSlice.reducer;
