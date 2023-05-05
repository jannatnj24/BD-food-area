import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../Components/Blog";
import ViewRecipe from "../Components/ViewRecipe/ViewRecipe";
import Login from "../Components/Login/Login";
import Register from "../Components/register/Register";
import PrivateRoute from "./PrivateRoute";


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
          path: "/login",
          element: <Login></Login>
  
        },
        
      
        {
          path: "/Register",
          element:<Register></Register>
  
        },

        {
          path: "/ViewRecipe/:id",
          element:<PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
          loader :({params})=>fetch(`http://localhost:5000/ViewRecipe/${params.id}`)
  
        }
      ]
    },
  ]);

  export default router;