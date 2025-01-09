import { NETFLIX_BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
console.log(NETFLIX_BG_URL);

const GPTSearch = () => {
   return (
      <div
         className={`w-[100vw] h-[100vh] absolute top-0 z-[-2] bg-image -[url(${NETFLIX_BG_URL})]`}
         style={{ background: `url(${NETFLIX_BG_URL})` }}
      >
         <GPTSearchBar />
         <GPTMovieSuggestions />
      </div>
   );
};

export default GPTSearch;
