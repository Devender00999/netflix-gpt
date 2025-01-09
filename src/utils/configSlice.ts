import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
   initialState: { lang: "en" },
   reducers: {
      changeLanguage: (state, action) => {
         state.lang = action.payload;
      },
   },
   name: "config",
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
