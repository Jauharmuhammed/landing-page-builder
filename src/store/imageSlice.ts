import { createSlice } from "@reduxjs/toolkit";


type ImageElement = {
    key: string;
    url: string;

    filename: string;
};

export type ImageElementStore = {
    image: ImageElement[];
};

const initialState: ImageElement[] = [];

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setImagePreview: (state, action) => {
            const { key, url, filename } = action.payload;

            const index = state.findIndex((element) => element.key === key);

            if (index !== -1) {
                state[index] = { ...state[index], url };
            } else {
                state.push({ key, url, filename });
            }
        },
    },
});

export const { setImagePreview } = imageSlice.actions;
export default imageSlice.reducer;
