import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   initialState: {
      showGPTSearch: false,
      searchQuery: "",
      moviesList: null,
      moviesResult: null,
   },
   name: "gpt",
   reducers: {
      toggleGPTSearchView: (state) => {
         state.showGPTSearch = !state.showGPTSearch;
      },
      addSearchQuery: (state, action) => {
         state.searchQuery = action.payload;
      },

      addSearchedMovies: (state, action) => {
         const { moviesList, moviesResult } = action.payload;
         state.moviesList = moviesList;
         state.moviesResult = moviesResult;
      },
   },
});

export const { toggleGPTSearchView, addSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;
