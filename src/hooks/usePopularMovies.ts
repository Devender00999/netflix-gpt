import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_MOVIE_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
   const dispatch = useDispatch();
   const popularMovies = useSelector(
      (store: any) => store.movies.popularMovies
   );

   const fetchData = async () => {
      const response = await (
         await fetch(
            `${TMDB_MOVIE_API}/popular?language=en-US&page=1`,
            TMDB_API_OPTIONS
         )
      ).json();
      dispatch(addPopularMovies(response?.results));
   };

   useEffect(() => {
      !popularMovies && fetchData();
   }, []);
};

export default usePopularMovies;
