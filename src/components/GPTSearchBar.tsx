import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openAI from "../utils/openai";
import { TMDB_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addSearchedMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
   const selectedLanguage = useSelector((state: any) => state.config.lang);
   const searchRef = useRef<HTMLInputElement>(null);

   const searchMovieTMDB = async (movie: string) => {
      const result = await fetch(
         `${TMDB_API}/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
         TMDB_API_OPTIONS
      );
      const movies = await result.json();
      return movies;
   };

   const dispatch = useDispatch();
   const handleSubmitForm = async (e: any) => {
      e.preventDefault();

      if (searchRef?.current) {
         const searchQuery = `You are a movies recommendation system for given query ${searchRef.current.value}. Result should be name of the movies only. for example Padosan, Andaz Apna Apna, Khiladi 786, Sholey. Give result as coma seperated value.`;
         if (searchQuery) {
            let gptMovies: string[] = [];
            try {
               const gptResults = await openAI.chat.completions.create({
                  model: "gpt-3.5-turbo",
                  messages: [{ role: "user", content: searchQuery }],
               });
               gptMovies =
                  gptResults.choices?.at(0)?.message?.content?.split(", ") ||
                  [];
            } catch (ex) {
               gptMovies =
                  "Avengers, Bhool Bhulaiyaa, Bhoot Police, Roohi, Go Goa Gone".split(
                     ", "
                  );
               console.log(searchMovieTMDB(gptMovies[0]));
            }
            const promises = gptMovies.map((movie) => searchMovieTMDB(movie));
            const moviesResult = await Promise.all(promises);
            dispatch(
               addSearchedMovies({ moviesList: gptMovies, moviesResult })
            );
         }
      }
   };

   return (
      <div className="pt-[20%] flex justify-center" onSubmit={handleSubmitForm}>
         <form className="flex p-3 bg-black rounded-lg gap-7">
            <input
               ref={searchRef}
               className="min-w-[400px] rounded-md px-4 outline-0"
               placeholder={lang[selectedLanguage].gptSearchPlaceholder}
            />
            <button
               type="submit"
               className="px-10 py-2 text-white bg-red-800 rounded-md"
            >
               {lang[selectedLanguage].search}
            </button>
         </form>
      </div>
   );
};

export default GPTSearchBar;
