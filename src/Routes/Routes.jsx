import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../Components/Blog";
import ViewRecipe from "../Components/ViewRecipe/ViewRecipe";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
         path:'/',
         element:<Home></Home>
        },
        {
         path:'/Blog',
         element:<Blog></Blog>
        },
        {
          path: "/ViewRecipe/:id",
          element:<ViewRecipe></ViewRecipe>,
          loader :({params})=>fetch(`http://localhost:5000/ViewRecipe/${params.id}`)
  
        }
      ]
    },
  ]);

  export default router;