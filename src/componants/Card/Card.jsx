import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({adventure }) => {


  console.log(adventure)
  return (
    <div
   
    className="bg-white shadow-lg my-4 rounded-lg overflow-hidden transform transition hover:scale-105"
  >
   
    <img
      src={adventure.image}
      alt={adventure.adventureTitle}
      className="w-full h-56 object-cover"
    />

   
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800">
        {adventure.adventureTitle}
      </h3>

   
      <ul className="mt-4 text-sm text-gray-600 space-y-2">
        {adventure.ecoFriendlyFeatures.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500">✔</span> {feature}
          </li>
        ))}
      </ul>

     
    <div>
    <Link to={`/adventure/${adventure.id}`} className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600">
        Explore Now
      </Link>
    </div>
    </div>
  </div>
  );
};

export default Card;