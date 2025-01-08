import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   initialState: {
      showGPTSearch: false,
      searchQuery: "",
   },
   name: "gpt",
   reducers: {
      toggleGPTSearchView: (state) => {
         state.showGPTSearch = !state.showGPTSearch;
      },
      addSearchQuery: (state, action) => {
         state.searchQuery = action.payload;
      },
   },
});

export const { toggleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;
