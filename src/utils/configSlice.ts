import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
   initialState: { selectedLanguage: "en" },
   reducers: {
      selectLanguage: (state, action) => {
         console.log(action);
         state.selectedLanguage = action.payload;
      },
   },
   name: "config",
});

export const { selectLanguage } = configSlice.actions;
export default configSlice.reducer;
