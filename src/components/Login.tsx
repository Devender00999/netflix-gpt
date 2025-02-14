import { FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { NETFLIX_BG_URL, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useFirebase } from "../utils/FirebaseContext";
import { addUser } from "../utils/userSlice";
import { checkLoginForm } from "../utils/validate";
import Header from "./Header";

const Login = () => {
   const [isSignupForm, setIsSignupForm] = useState(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);

   const user = useSelector((state: any) => state.user);
   const dispatch = useDispatch();

   const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const nameRef = useRef<HTMLInputElement>(null);
   const { signupWithEmailPass, updateUser, loginWithEmailPass } =
      useFirebase();

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const email = emailRef.current?.value || "";
      const password = passwordRef.current?.value || "";
      const name = nameRef.current?.value || "";
      const message = checkLoginForm(email, password);

      setErrorMessage(message);
      if (message) return;

      if (!isSignupForm) {
         loginWithEmailPass(email, password)
            .then(() => {})
            .catch((error) => setErrorMessage(error.message));
      } else {
         signupWithEmailPass(email, password)
            .then(() => {
               updateUser({
                  displayName: name,
                  photoURL:
                     USER_AVATAR[
                        Math.floor(Math.random() * USER_AVATAR.length)
                     ],
               })
                  .then(() => {
                     if (auth.currentUser) {
                        const { uid, displayName, email, photoURL } =
                           auth?.currentUser;
                        dispatch(
                           addUser({ uid, displayName, email, photoURL })
                        );
                     }
                  })
                  .catch((error) => {
                     setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
               setErrorMessage(error.message);
            });
         // const message = checkSignUpForm(email, password, name);
         // setErrorMessage(message);
      }
   };

   if (user) return <Navigate to="/browse"></Navigate>;

   return (
      <div
         className={`w-[100vw] h-[100vh] absolute top-0 z-[-2] bg-[url(${NETFLIX_BG_URL})]`}
         style={{ background: `url(${NETFLIX_BG_URL})` }}
      >
         <div className="absolute w-[100vw] h-[100vh] z-[-1] bg-black opacity-50"></div>
         <Header />
         <div className="w-full mt-20 flex justify-center pt-10">
            <div className="bg-[#00000099] w-[450px] flex flex-col gap-7 rounded-md px-[4.25rem] py-14">
               <h1 className="text-white text-3xl font-[500]">
                  Sign {isSignupForm ? "Up" : "In"}
               </h1>
               <form
                  className="flex flex-col gap-5 w-full"
                  onSubmit={handleSubmit}
               >
                  {isSignupForm && (
                     <input
                        ref={nameRef}
                        className=" text-white px-3 py-4 rounded-[4px] bg-[#0908086b] border-gray-500 border-[0.5px]"
                        placeholder="Full name"
                     />
                  )}
                  <input
                     className=" text-white px-3 py-4 rounded-[4px] bg-[#0908086b] border-gray-500 border-[0.5px]"
                     placeholder="Email Address"
                     ref={emailRef}
                  />
                  <input
                     className=" text-white outline-none px-3 py-4 rounded-[4px] bg-[#0908086b] border-gray-500 border-[0.5px]"
                     placeholder="Password"
                     type={"password"}
                     ref={passwordRef}
                  />
                  {errorMessage && (
                     <p className="text-[#eb3942] font-medium">
                        {errorMessage}
                     </p>
                  )}
                  <button className="bg-[#e50914] rounded-[4px] text-white px-4 py-2">
                     Sign {isSignupForm ? "Up" : "In"}
                  </button>
                  {/* <span className="text-center text-[#dfdfdf] -mt-2">OR</span>
                  <button className="bg-[#dfdfdf23] rounded-[4px] text-white px-4 py-2">
                     Use a sign-in code
                  </button> */}
                  <a className="text-center cursor-pointer mt-[-15px] rounded-[4px] text-white px-4 py-2">
                     Forgot Password?
                  </a>
                  <label className="text-white flex gap-2">
                     <input type="checkbox" />
                     <span>Remember me</span>
                  </label>
                  <div className="text-[#ffffffb3] -mt-3">
                     {isSignupForm
                        ? "Already have an account?"
                        : "New to Cineverse?"}
                     <a
                        onClick={() => setIsSignupForm(!isSignupForm)}
                        className="text-center ml-2 cursor-pointer rounded-[4px] text-white py-2"
                     >
                        Sign {isSignupForm ? "in" : "up"} now.
                     </a>
                  </div>
                  <div>
                     <h2 className="text-lg font-semibold text-white mb-4">
                        Disclaimer
                     </h2>
                     <p className="text-sm text-gray-300">
                        This platform is not affiliated with or endorsed by
                        Netflix.
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
