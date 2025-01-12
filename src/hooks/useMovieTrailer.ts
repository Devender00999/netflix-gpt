import { useDispatch, useSelector } from "react-redux";
import { TMDB_MOVIE_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId: number) => {
   const dispatch = useDispatch();
   const trailerVideo = useSelector(
      (store: any) => store?.movies?.trailerVideo
   );

   const getMovieVideos = async () => {
      const response = await fetch(
         `${TMDB_MOVIE_API}/${movieId}/videos`,
         TMDB_API_OPTIONS
      );

      const movieVideos = await response.json();
      const trailers = movieVideos?.results?.filter(
         (video: any) => video.type === "Trailer"
      );

      const firstTrailer = trailers.length
         ? trailers[1]
         : movieVideos?.results?.[0];

      dispatch(addTrailerVideo(firstTrailer));
   };

   useEffect(() => {
      !trailerVideo && getMovieVideos();
   }, []);
};

export default useMovieTrailer;
