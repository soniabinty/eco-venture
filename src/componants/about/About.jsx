import React from "react";
import image from '../../assets/362dbc1c.jpg'
import 'animate.css'

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 md:px-12 lg:px-24 py-12">
      {/* Text Section */}
      <div className="space-y-6 animate__animated animate__slideInLeft animate__delay-3s">
        <h2 className="text-4xl font-bold text-black gap-2">
          <span className="text-blue-400 text-8xl leading-none">❝</span> 
          Welcome To EcoVenture
        </h2>

        <h2 className="text-2xl font-bold text-blue-500">
          
          ‘For safe and boundless adventures and leisure cultural tours’
        </h2>
        <p className="text-gray-600">
        For various reasons, one should join the one and only EcoVenture.  We are active members of many reputed regulatory bodies. A great company that one can trust for reliability, smooth and hassle-free holidays in all over the world. . 
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-400  font-bold mr-3">✔</span> 
            Fixed prices without hidden costs
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 font-bold mr-3">✔</span> 
            "Where adventure meets comfort with safe-secure and enjoyable holidays"
          </li>
          <li className="flex items-start">
            <span className="text-blue-400  font-bold mr-3">✔</span> 
            From the booking with the first arrival.
          </li>
        </ul>
     
        <a 
          href="#about-us" 
          className="inline-block bg-blue-500  text-white py-3 px-6 font-semibold rounded hover:bg-blue-600  hover:text-white "
        >
          ABOUT US
        </a>
      </div>

     
      <div className="h-full w-full md:h-auto">
        <img
          src={image}
          alt="Hiker with backpack" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
