import {
  createBrowserRouter

} from "react-router-dom";
import Root from "./Root";

import Login from "../login/Login";
import Register from '../register/Register'
import Home from "../home/Home";
import AdventureDetails from "../adventure/AdventureDetails";



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
     element: <AdventureDetails> </AdventureDetails> ,
     loader:async({params}) =>{
      const res = await fetch('/adventure.json')
    const data = await res.json()
    const singleData = data.find(adven =>adven.id ==params.id)

    return singleData
  }
 
    },
    ]
  },

 
]);
 export default router;