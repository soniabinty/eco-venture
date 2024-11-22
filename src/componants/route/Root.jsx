import React from 'react';
import Navbar from '../home/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DynamicTitle from '../DynamicTitles/DynamicTitles';




const Root = () => {


DynamicTitle();
  return (
    <div>
      <Navbar></Navbar>
     
   <Outlet></Outlet>
   <ToastContainer/>

      
    </div>
  );
};

export default Root;