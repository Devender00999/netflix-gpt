import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPlayingShows from "../hooks/useNowPlayingShows";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularShows from "../hooks/usePopularShows";
import useTrendingAll from "../hooks/useTrendingAll";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearchPage";

const Browse = () => {
   const showSearchView = useSelector(
      (state: any) => state?.gpt?.showGPTSearch
   );
   useNowPlayingMovies();
   usePopularMovies();
   useTrendingAll();
   usePopularShows();
   useNowPlayingShows();

   return (
      <div>
         <Header />
         {showSearchView ? (
            <GPTSearch></GPTSearch>
         ) : (
            <>
               <MainContainer />
               <SecondaryContainer />
            </>
         )}
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
