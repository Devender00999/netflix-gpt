import { Movie } from "../types/movie";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ movieDetails }: { movieDetails?: Movie }) => {
   return (
      <div className="w-36 md:w-48 rounded relative overflow-hidden">
         <img
            className=""
            src={
               movieDetails?.poster_path
                  ? `${TMDB_IMAGE_URL}${movieDetails?.poster_path}`
                  : "https://image.tmdb.org/t/p/original/96dVtEmz7ytMmHLrknB1geATwAZ.jpg"
            }
         />
         {!movieDetails?.poster_path && (
            <div className="absolute italic text-center py-3 bg-white bottom-0 w-full text-xl">
               {movieDetails?.title}
            </div>
         )}
      </div>
   );
};

export default MovieCard;
