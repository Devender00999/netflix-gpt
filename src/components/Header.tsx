import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useFirebase } from "../utils/FirebaseContext";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
   const user = useSelector((state: any) => state.user);
   const { logout } = useFirebase();
   const navigate = useNavigate();
   const dispatch = useDispatch();

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
      <div className="px-8 py-2  bg-gradient-to-b from-black flex items-center justify-between">
         <img
            onClick={() => {
               logout();
               navigate("/");
            }}
            className="w-44"
            src={Logo}
         />

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
               (Sign out)
            </button>
         )}
      </div>
   );
};

export default Header;
