import React from 'react';
import Experiences from '../Experiences/Experiences';

import Banner from '../banner/Banner'
import About from '../about/About';
import Popular from '../popular/Popular';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Experiences></Experiences>
      <About></About>
     <Popular></Popular>
      
    </div>
  );
};

export default Home;