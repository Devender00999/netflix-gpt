import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/configSlice";
import { auth } from "../utils/firebase";
import { useFirebase } from "../utils/FirebaseContext";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { availableLanguages } from "../utils/languageConstants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
   const user = useSelector((state: any) => state.user);
   const showGPTSearch = useSelector((state: any) => state.gpt.showGPTSearch);

   const { logout } = useFirebase();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const selectedLanguage = useSelector((state: any) => state.config.lang);

   const handleToggleGPTSearch = () => {
      dispatch(toggleGPTSearchView());
   };

   const handleChangeLangugage = (e: any) => {
      dispatch(changeLanguage(e.target.value));
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            const { uid, displayName, email, photoURL } = user;
            dispatch(addUser({ uid, displayName, email, photoURL }));
            navigate("/browse");
         } else {
            dispatch(removeUser());
            navigate("/");
         }
      });
      return () => {
         unsubscribe();
      };
   }, []);

   return (
      <div className="absolute w-screen px-2 md:px-8 py-2  bg-gradient-to-b from-black flex flex-col md:flex-row items-center justify-between z-10">
         <div
            onClick={() => {
               navigate("/");
            }}
            className="w-44 text-3xl p-4 uppercase font-bold text-[#e50914]"
            // src={Logo}
         >
            CineVerse
         </div>

         <div className="flex gap-4">
            {showGPTSearch && (
               <select
                  defaultValue={selectedLanguage}
                  onChange={handleChangeLangugage}
                  className="bg-black text-[white] w-32 px-3 rounded"
               >
                  {availableLanguages?.map((item) => (
                     <option key={item.langCode} value={item.langCode}>
                        {item.language}
                     </option>
                  ))}
               </select>
            )}
            {user && (
               <button
                  onClick={() => handleToggleGPTSearch()}
                  className="text-white bg-purple-800 py-2 px-4 cursor-pointer rounded"
               >
                  {showGPTSearch ? "Homepage" : "GPT Search"}
               </button>
            )}
            {user && (
               <button
                  className="font-medium cursor-pointer flex justify-center items-center"
                  onClick={() => {
                     logout().then(() => {
                        navigate("/");
                     });
                  }}
               >
                  <img src={user.photoURL} className="w-10 h-10 rounded" />
                  <span className="text-white">(Sign out)</span>
               </button>
            )}
         </div>
      </div>
   );
};

export default Header;
