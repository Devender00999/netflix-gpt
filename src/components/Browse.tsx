import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPlayingShows from "../hooks/useNowPlayingShows";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularShows from "../hooks/usePopularShows";
import useTrendingAll from "../hooks/useTrendingAll";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useTrendingAll();
   usePopularShows();
   useNowPlayingShows();

   return (
      <div>
         <Header />
         <MainContainer />
         <SecondaryContainer />
         {/* 
            Main Container 
               - Video Container 
               - Video title

            Secondary Container 
               - Movie list
               - Cards
         
         */}
      </div>
   );
};

export default Browse;
