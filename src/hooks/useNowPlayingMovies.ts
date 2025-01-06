import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_MOVIE_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
   const dispatch = useDispatch();

   const getNowPlayingMovies = async () => {
      const response = await (
         await fetch(
            `${TMDB_MOVIE_API}/now_playing?language=en-US&page=1`,
            TMDB_API_OPTIONS
         )
      ).json();
      dispatch(addNowPlayingMovies(response?.results));
   };

   useEffect(() => {
      getNowPlayingMovies();
   }, []);
};

export default useNowPlayingMovies;
