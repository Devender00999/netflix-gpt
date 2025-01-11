import { NETFLIX_BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
console.log(NETFLIX_BG_URL);

const GPTSearch = () => {
   return (
      <div className={``}>
         <div className="fixed -z-10">
            <img src={NETFLIX_BG_URL} alt="bg" />
         </div>
         <GPTSearchBar />
         <GPTMovieSuggestions />
      </div>
   );
};

export default GPTSearch;
