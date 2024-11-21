import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AdventureDetails = () => 



   {

  const adventure = useLoaderData()

  
 
  return (
    <div className="container mx-auto py-16 px-6 lg:px-20">
    
      <div className="relative">
        <img
          src={adventure.image || "/path/to/default-image.jpg"}
          alt={adventure.adventureTitle || "Adventure"}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold">{adventure.adventureTitle}</h1>
          <p className="mt-4 text-white text-lg">{adventure.shortDescription}</p>
        </div>
      </div>

   
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div>
          <h2 className="text-3xl text-blue-500 font-semibold ">Adventure Details</h2>
          <p className="text-gray-600 mt-4">{adventure.longDescription}</p>

          <div className="mt-6">
            <p className="text-gray-600">
              <span className="font-bold">Duration:</span> {adventure.duration || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Location:</span> {adventure.location || "Unknown"}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Difficulty:</span> {adventure.adventureLevel || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Cost:</span> {adventure.adventureCost || "Contact for pricing"}
            </p>
          </div>
        </div>

       
        <div>
          <h2 className="text-3xl text-blue-500 font-semibold ">Eco-Friendly Features</h2>
          <ul className="list-disc mt-4 pl-6 space-y-2">
            {adventure.ecoFriendlyFeatures?.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-semibold text-blue-500 mt-8">Included Items</h2>
          <ul className="list-disc mt-4 pl-6 space-y-2">
            {adventure.includedItems?.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

   
      <div className="mt-12">
        <h2 className="text-3xl text-blue-500 font-semibold">Special Instructions</h2>
        <ul className="list-disc mt-4 pl-6 space-y-2">
          {adventure.specialInstructions?.map((instruction, index) => (
            <li key={index} className="text-gray-600">
              {instruction}
            </li>
          ))}
        </ul>
      </div>

    
      <div className="mt-12">
        <p className="text-xl text-gray-800">
          <span className="font-semibold text-blue-500">Max Group Size:</span> {adventure.maxGroupSize || "N/A"}
        </p>
      </div>

   
      <div className="mt-16 text-center">
        <button className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Talk with Expert
        </button>
      </div>
    </div>
  );
};

export default AdventureDetails;
