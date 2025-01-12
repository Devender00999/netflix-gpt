import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
   const movies = useSelector((store: any) => store.movies);

   return (
      <div className="bg-[#141414]">
         <div className="flex flex-col gap-7 relative md:-mt-[14%] pb-14">
            <MovieList title="Top Searches" movies={movies.trendingAll} />
            <MovieList
               title="Now Playing Movies"
               movies={movies.nowPlayingMovies}
            />
            <MovieList
               title="Now Playing Shows"
               movies={movies.nowPlayingShows}
            />
            <MovieList title="Popular Movies" movies={movies.popularMovies} />
            <MovieList title="Popular Shows" movies={movies.popularShows} />
            {/* <MovieList title="Whatsapp" movies={movies.nowPlayingMovies} /> */}
         </div>
      </div>
   );
};

export default SecondaryContainer;
