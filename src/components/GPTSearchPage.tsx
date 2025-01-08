import { NETFLIX_BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
   return (
      <div
         className={`w-[100vw] h-[100vh] absolute top-0 z-[-2] bg-[url(${NETFLIX_BG_URL})]`}
      >
         <GPTSearchBar />
         <GPTMovieSuggestions />
      </div>
   );
};

export default GPTSearch;
