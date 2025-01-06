import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   initialState: {
      showGPTSearch: false,
   },
   name: "gpt",
   reducers: {
      toggleGPTSearchView: (state) => {
         state.showGPTSearch = !state.showGPTSearch;
      },
   },
});

export const { toggleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;
