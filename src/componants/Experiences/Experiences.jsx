import { useLoaderData, useNavigate } from "react-router-dom";
import Card from '../Card/Card'
import { useState } from "react";



const Experiences = () => {
  const adventures = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const displayedAdventures = showAll ? adventures : adventures.slice(0, 6);
 
  



  return (

    
    <div className="max-w-screen-xl mx-auto my-16 ">
<div className="max-w-xl mx-auto my-6"> <h1 className='md:text-5xl text-center text-blue-400 text-2xl font-bold '>WE HAVE SOME FOCUSED EXPERIENCES</h1>  
     <p className="text-center text-gray-600 mt-4">
        Discover handpicked adventures designed to inspire, thrill, and create memories. 
        Choose your next experience and embark on a journey like no other!
      </p></div>
    
   <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-8 gap-4 px-4">
  
      {displayedAdventures.map((adventure) => (
        <Card key={adventure.id} adventure={adventure}  />
      ))}
   </div>
   {showAll ? "" : 
   <div className="text-center mt-8">
        <button
          className="bg-blue-500 p-3 rounded-lg text-white font-semibold"
          onClick={() => setShowAll(!showAll)}
        >
          View All
        </button>
      </div>}
    </div>
  );
};
export default Experiences;