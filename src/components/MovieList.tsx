import { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }: { movies: Movie[]; title: string }) => {
   if (movies?.length > 0)
      return (
         <div className=" px-10">
            <h4 className="text-lg md:text-[1.4vw] text-white font-medium">
               {title}
            </h4>
            <div className="flex overflow-auto mt-3">
               <div className="flex gap-4">
                  {movies?.map((movie) => (
                     <MovieCard key={movie.id} movieDetails={movie} />
                  ))}
               </div>
            </div>
         </div>
      );
};

export default MovieList;
