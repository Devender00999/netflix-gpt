import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOW_PLAYING_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
   const dispatch = useDispatch();

   const getNowPlayingMovies = async () => {
      const response = await (
         await fetch(NOW_PLAYING_API, TMDB_API_OPTIONS)
      ).json();
      dispatch(addNowPlayingMovies(response?.results));
   };

   useEffect(() => {
      getNowPlayingMovies();
   }, []);
};

export default useNowPlayingMovies;
