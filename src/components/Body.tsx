import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
// import GPTSearch from "./GPTSearch";

const Body = () => {
   const appRouter = createBrowserRouter([
      { path: "/", element: <Login /> },
      { path: "/browse", element: <Browse /> },
      // { path: "/search", element: <GPTSearch /> },
   ]);
   return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
