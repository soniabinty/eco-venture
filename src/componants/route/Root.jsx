import React from 'react';
import Navbar from '../home/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';




const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
     
   <Outlet></Outlet>
   <ToastContainer/>

      
    </div>
  );
};

export default Root;