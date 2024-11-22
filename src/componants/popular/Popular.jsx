import React from "react";
import sea from '../../assets/seabeach.jpg'
import hill from '../../assets/hill.jpg'
import hill3 from '../../assets/moun.jpg'

const Popular = () => {
 
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
   
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 ">MOST POPULAR EVENT</h2>
        <p className="text-gray-600 mt-2">
         The management EcoVenture is efficient providing you most popular events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
          <div className="relative group">
          
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={sea}
                alt=""
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-90 bg-white flex justify-around items-center py-2">
                <div className="text-center">
                  <span className="block text-blue-600 font-bold text-xl">15</span>
                  <span className="text-gray-600 text-sm">Guest</span>
                </div>
                <div className="text-center">
                  <span className="block text-blue-600  font-bold text-xl">9</span>
                  <span className="text-gray-600 text-sm">Days</span>
                </div>
                <div className="text-center">
                  <span className="block text-blue-600  font-bold text-xl">$300</span>
                  <span className="text-gray-600 text-sm">Price</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold"> Whitehaven Beach, Australia</h3>
              <p className="text-gray-600 text-sm mt-2">Famous for its white silica sand and crystal-clear waters.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600  font-bold hover:underline"
              >
                Start Journey →
              </a>
            </div>
          </div>



          
          <div className="relative group">
           
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={hill}
                alt=""
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-90 bg-white flex justify-around items-center py-2">
                <div className="text-center">
                  <span className="block text-blue-600 font-bold text-xl">15</span>
                  <span className="text-gray-600 text-sm">Guest</span>
                </div>
                <div className="text-center">
                  <span className="block text-blue-600  font-bold text-xl">12</span>
                  <span className="text-gray-600 text-sm">Days</span>
                </div>
                <div className="text-center">
                  <span className="block text-blue-600  font-bold text-xl">$370</span>
                  <span className="text-gray-600 text-sm">Price</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold"> Himalayas, Nepal (Everest Base Camp)</h3>
              <p className="text-gray-600 text-sm mt-2">Home to the world’s highest peaks, including Mount Everest.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600  font-bold hover:underline"
              >
                Start Journey →
              </a>
            </div>
          </div>




          
          <div className="relative group">
          
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={hill3}
                alt=""
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-90 bg-white flex justify-around items-center py-2">
                <div className="text-center">
                  <span className="block text-blue-600 font-bold text-xl">32</span>
                  <span className="text-gray-600 text-sm">Guest</span>
                </div>
                <div className="text-center">
                  <span className="block text-blue-600  font-bold text-xl">15</span>
                  <span className="text-gray-600 text-sm">Days</span>
                </div>
                <div className="text-center">
                  <span className="block text-blue-600  font-bold text-xl">$700</span>
                  <span className="text-gray-600 text-sm">Price</span>
                </div>
              </div>
            </div>

          
            <div className="mt-4">
              <h3 className="text-lg font-semibold"> Mount Kilimanjaro, Tanzania</h3>
              <p className="text-gray-600 text-sm mt-2">The highest peak in Africa .</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600  font-bold hover:underline"
              >
                Start Journey →
              </a>
            </div>
          </div>
       
      </div>

   
   
    </div>
  );
};

export default Popular;
