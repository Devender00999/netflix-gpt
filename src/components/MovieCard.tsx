import { Movie } from "../types/movie";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ movieDetails }: { movieDetails?: Movie }) => {
   return (
      <div className="w-36 md:w-48 rounded overflow-hidden">
         <img
            className=""
            src={`${TMDB_IMAGE_URL}${movieDetails?.poster_path}`}
         />
      </div>
   );
};

export default MovieCard;
