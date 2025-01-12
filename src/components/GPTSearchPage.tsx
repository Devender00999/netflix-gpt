import { NETFLIX_BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
console.log(NETFLIX_BG_URL);

const GPTSearch = () => {
   return (
      <>
         <div className="fixed -z-10">
            <img
               className="h-screen w-screen object-cover"
               src={NETFLIX_BG_URL}
               alt="bg"
            />
         </div>
         <div className={``}>
            <GPTSearchBar />
            <GPTMovieSuggestions />
         </div>
      </>
   );
};

export default GPTSearch;
