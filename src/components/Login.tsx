import Header from "./Header";

const Login = () => {
   return (
      <div className=" w-[100vw] h-[100vh] absolute top-0 z-[-2] bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg)]">
         <div className="absolute w-[100vw] h-[100vh] z-[-1] bg-black opacity-50"></div>
         <Header />

         <div className="w-full flex justify-center">
            <div className="bg-[#00000079] w-max p-10 flex flex-col gap-7 rounded-md">
               <h1 className="text-white text-4xl">Sign In</h1>
               <div className="flex flex-col gap-5 ">
                  <input
                     className="w-[350px] px-3 py-4 rounded-md bg-[#0908086b] border-red-100 border-[0.5px]"
                     placeholder="Email or mobile number"
                  />
                  <input className="w-[350px]" placeholder="Password" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
