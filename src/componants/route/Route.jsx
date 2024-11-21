import {
  createBrowserRouter

} from "react-router-dom";
import Root from "./Root";

import Login from "../login/Login";
import Register from '../register/Register'
import Home from "../home/Home";
import AdventureDetails from "../adventure/AdventureDetails";
import Error from "../Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyProfile from "../myProfile/MyProfile";
import Update from '../update/Update'



const router = createBrowserRouter(
  
  [
  {
    path: "/",
    element: <Root></Root>,



    
    children:
    [

   { path: "/",
    element: <Home></Home>,
    loader:() =>fetch('/adventure.json')
  },


       {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  },

  {
    path: "/adventure/:id",
    element: <PrivateRoute>
      <AdventureDetails />,
    </PrivateRoute>,
    loader: async ({ params }) => {
      const response = await fetch("/adventure.json");
      if (!response.ok) {
        throw new Error("Failed to load adventures");
      }
      const data = await response.json();
      const singleData = data.find((adven) => adven.id == params.id);
      if (!singleData) {
        throw new Error("Adventure not found");
      }
      return singleData;
    },
  },



    {  path:"/myprofile",
      element: <PrivateRoute>
     <MyProfile></MyProfile>
    </PrivateRoute>,
    },
    {  path:"/update",
      element: <PrivateRoute>
   <Update></Update>,
    </PrivateRoute>,
    },
    
    
      
    ]
  },

  {  path:"*",
    element:<Error></Error>
  },

 
]);
 export default router;