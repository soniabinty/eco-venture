import React from 'react';
import Navbar from '../home/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DynamicTitle from '../DynamicTitles/DynamicTitles';
import Footer from '../footer/Footer';




const Root = () => {


DynamicTitle();
  return (
    <div className='font'>
      <Navbar></Navbar>
     
   <Outlet></Outlet>
  

   <Footer></Footer>
   <ToastContainer/>

      
    </div>
  );
};

export default Root;