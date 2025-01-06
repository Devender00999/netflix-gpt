import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name: "movies",
   initialState: {
      nowPlayingMovies: null,
      nowPlayingShows: null,
      trailerVideo: null,
      popularMovies: null,
      popularShows: null,
      trendingAll: null,
   },
   reducers: {
      addNowPlayingMovies: (state, action) => {
         state.nowPlayingMovies = action.payload;
      },
      addNowPlayingShows: (state, action) => {
         state.nowPlayingShows = action.payload;
      },
      addPopularMovies: (state, action) => {
         state.popularMovies = action.payload;
      },
      addPopularShows: (state, action) => {
         state.popularShows = action.payload;
      },
      addTrendingAll: (state, action) => {
         state.trendingAll = action.payload;
      },
      addTrailerVideo: (state, action) => {
         state.trailerVideo = action.payload;
      },
   },
});

export const {
   addNowPlayingMovies,
   addTrailerVideo,
   addPopularMovies,
   addTrendingAll,
   addNowPlayingShows,
   addPopularShows,
} = moviesSlice.actions;
export default moviesSlice.reducer;
