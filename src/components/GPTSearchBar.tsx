import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
   const selectedLanguage = useSelector(
      (state: any) => state.config.selectedLanguage
   );
   return (
      <div className="pt-[20%] flex justify-center">
         <div className="flex p-3 bg-black rounded-lg gap-7">
            <input
               className="min-w-[400px] rounded-md px-4 outline-0"
               placeholder={lang[selectedLanguage].gptSearchPlaceholder}
            />
            <button className="px-10 py-2 text-white bg-red-800 rounded-md">
               {lang[selectedLanguage].search}
            </button>
         </div>
      </div>
   );
};

export default GPTSearchBar;
