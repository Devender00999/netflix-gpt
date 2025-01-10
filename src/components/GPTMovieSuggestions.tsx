import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
   const { moviesList, moviesResult } = useSelector((store: any) => store.gpt);
   if (!moviesList) return null;

   return (
      <div className="bg-black flex flex-col gap-5 mt-8 pt-4">
         {moviesList.map((movie: string, idx: number) => {
            return (
               <MovieList
                  key={movie}
                  title={movie}
                  movies={moviesResult[idx]?.results}
               />
            );
         })}
      </div>
   );
};

export default GPTMovieSuggestions;
