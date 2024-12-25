import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useFirebase } from "../utils/FirebaseContext";
const Header = () => {
   const user = useSelector((state: any) => state.user);
   const { logout } = useFirebase();
   const navigate = useNavigate();
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
               className="font-medium cursor-pointer"
               onClick={() => {
                  logout().then(() => {
                     navigate("/");
                  });
               }}
            >
               {user.displayName} Sign out
            </button>
         )}
      </div>
   );
};

export default Header;
