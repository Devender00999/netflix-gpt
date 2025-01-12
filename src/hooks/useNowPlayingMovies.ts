import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_MOVIE_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
   const dispatch = useDispatch();
   const nowPlayingMovies = useSelector(
      (store: any) => store.movies.nowPlayingMovies
   );

   const fetchData = async () => {
      const response = await (
         await fetch(
            `${TMDB_MOVIE_API}/now_playing?language=en-US&page=1`,
            TMDB_API_OPTIONS
         )
      ).json();
      dispatch(addNowPlayingMovies(response?.results));
   };

   useEffect(() => {
      !nowPlayingMovies && fetchData();
   }, []);
};

export default useNowPlayingMovies;
