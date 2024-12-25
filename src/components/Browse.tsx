import { useSelector } from "react-redux";
import Header from "./Header";
import { Navigate } from "react-router-dom";

const Browse = () => {
   const user = useSelector((state: any) => state.user);

   if (!user) return <Navigate to="/" />;
   return (
      <div>
         <Header />
      </div>
   );
};

export default Browse;
