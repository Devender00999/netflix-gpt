import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addTrendingAll } from "../utils/moviesSlice";

const useTrendingAll = () => {
   const dispatch = useDispatch();

   const fetchData = async () => {
      const response = await (
         await fetch(
            `${TMDB_API}/trending/all/day?language=en-US&page=1`,
            TMDB_API_OPTIONS
         )
      ).json();
      dispatch(addTrendingAll(response?.results));
   };

   useEffect(() => {
      fetchData();
   }, []);
};

export default useTrendingAll;
