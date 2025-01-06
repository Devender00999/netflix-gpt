import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_SHOW_API } from "../utils/constants";
import { addPopularShows } from "../utils/moviesSlice";

const usePopularShows = () => {
   const dispatch = useDispatch();

   const fetchData = async () => {
      const response = await (
         await fetch(
            `${TMDB_SHOW_API}/popular?language=en-US&page=1`,
            TMDB_API_OPTIONS
         )
      ).json();
      dispatch(addPopularShows(response?.results));
   };

   useEffect(() => {
      fetchData();
   }, []);
};

export default usePopularShows;
