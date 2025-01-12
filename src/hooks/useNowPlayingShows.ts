import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_SHOW_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingShows } from "../utils/moviesSlice";

const useNowPlayingShows = () => {
   const dispatch = useDispatch();
   const nowPlayingShows = useSelector(
      (store: any) => store.movies.nowPlayingShows
   );

   const fetchData = async () => {
      const response = await (
         await fetch(
            `${TMDB_SHOW_API}/on_the_air?language=en-US&page=1`,
            TMDB_API_OPTIONS
         )
      ).json();
      dispatch(addNowPlayingShows(response?.results));
   };

   useEffect(() => {
      !nowPlayingShows && fetchData();
   }, []);
};

export default useNowPlayingShows;
