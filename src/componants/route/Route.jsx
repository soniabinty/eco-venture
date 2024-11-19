import {
  createBrowserRouter

} from "react-router-dom";
import Root from "./Root";

import Login from "../login/Login";
import Register from '../register/Register'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    
    children:[
       {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  }
    ]
  },

 
]);
 export default router;