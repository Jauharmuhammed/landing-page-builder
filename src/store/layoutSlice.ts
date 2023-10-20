import landingPageData from "@/data/landing-page";
import { createSlice } from "@reduxjs/toolkit";

const initialState = landingPageData

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    updateNavbarActionLabel: (state, action) => {
      // Update the navbar action label
      state.elements.navbar.actions[0].label = action.payload;
    },
    // Add more reducers for other state updates
  },
});

export const { updateNavbarActionLabel } = layoutSlice.actions;
export default layoutSlice.reducer;
