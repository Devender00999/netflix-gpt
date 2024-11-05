import Header from "./Header";

const Login = () => {
   return (
      <div className=" w-[100vw] h-[100vh] absolute top-0 z-[-2] bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg)]">
         <div className="absolute d w-[100vw] h-[100vh] z-[-1] bg-black opacity-50"></div>
         <Header />
         <div className="w-full flex justify-center ">
            <div className="bg-[#00000099] w-max p-10 flex flex-col gap-7 rounded-md py-10">
               <h1 className="text-white text-3xl font-bold">Sign In</h1>
               <div className="flex flex-col gap-5 ">
                  <input
                     className="w-[350px] text-white px-3 py-4 rounded-[4px] bg-[#0908086b] border-gray-500 border-[0.5px]"
                     placeholder="Email or mobile number"
                  />
                  <input
                     className="w-[350px] text-white outline-none px-3 py-4 rounded-[4px] bg-[#0908086b] border-gray-500 border-[0.5px]"
                     placeholder="Password"
                  />
                  <button className="w-[350px] bg-[#e50914] rounded-[4px] text-white px-4 py-2">
                     Sign In
                  </button>
                  <span className="text-center text-[#dfdfdf] -mt-2">OR</span>
                  <button className="w-[350px] bg-[#dfdfdf23] rounded-[4px] text-white px-4 py-2">
                     Use a sign-in code
                  </button>
                  <a className="text-center cursor-pointer w-[350px] mt-[-15px] rounded-[4px] text-white px-4 py-2">
                     Forgot Password?
                  </a>
                  <label className="text-white flex gap-2">
                     <input type="checkbox" />
                     <span>Remember me</span>
                  </label>
                  <div className="text-[#ffffffb3] -mt-3">
                     New to netflix?
                     <a className="text-center ml-2 cursor-pointer w-[350px] rounded-[4px] text-white py-2">
                        Sign up now.
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
