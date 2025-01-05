import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }: { movieId: number }) => {
   useMovieTrailer(movieId);

   const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);

   if (!trailerVideo) return;
   return (
      <div className="w-screen">
         <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&loop=1&mute=1&controls=0&modestbranding=0&color=white&rel=0&iv_load_policy=3`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
         ></iframe>
      </div>
   );
};

export default VideoBackground;
