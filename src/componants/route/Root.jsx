import React from 'react';
import Navbar from '../home/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner';


const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
   <Outlet></Outlet>

      
    </div>
  );
};

export default Root;