import { FormEvent, useRef, useState } from "react";
import { useFirebase } from "../utils/FirebaseContext";
import { checkLoginForm } from "../utils/validate";
import Header from "./Header";

const Login = () => {
   const [isSignupForm, setIsSignupForm] = useState(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);
   const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const nameRef = useRef<HTMLInputElement>(null);
   const { signupWithEmailPass, loginWithEmailPass } = useFirebase();

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const email = emailRef.current?.value || "";
      const password = passwordRef.current?.value || "";
      // const name = nameRef.current?.value || "";
      const message = checkLoginForm(email, password);
      setErrorMessage(message);
      if (message) return;

      if (!isSignupForm) {
         loginWithEmailPass(email, password)
            .then((userCredential) => {
               const user = userCredential.user;

               console.log(user);
            })
            .catch((error) => setErrorMessage(error.message));
      } else {
         signupWithEmailPass(email, password)
            .then((userCredential) => {
               const user = userCredential.user;
               console.log(user);
            })
            .catch((error) => {
               setErrorMessage(error.message);
            });
         // const message = checkSignUpForm(email, password, name);
         // setErrorMessage(message);
      }
   };

   return (
      <div className=" w-[100vw] h-[100vh] absolute top-0 z-[-2] bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg)]">
         <div className="absolute w-[100vw] h-[100vh] z-[-1] bg-black opacity-50"></div>
         <Header />
         <div className="w-full flex justify-center pt-10">
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
                        : "New to netflix?"}
                     <a
                        onClick={() => setIsSignupForm(!isSignupForm)}
                        className="text-center ml-2 cursor-pointer rounded-[4px] text-white py-2"
                     >
                        Sign {isSignupForm ? "in" : "up"} now.
                     </a>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
