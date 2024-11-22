import React from 'react';
import Experiences from '../Experiences/Experiences';

import Banner from '../banner/Banner'
import About from '../about/About';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Experiences></Experiences>
      <About></About>
      
    </div>
  );
};

export default Home;