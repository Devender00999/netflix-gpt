import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
   const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
   if (movies === null) return;

   const mainMovie = movies[0];

   const { original_title, overview, id } = mainMovie;

   return (
      <div className="pt-[32%] md:pt-0 bg-black">
         <VideoTitle title={original_title} overview={overview} />
         <VideoBackground movieId={id} />
      </div>
   );
};

export default MainContainer;
