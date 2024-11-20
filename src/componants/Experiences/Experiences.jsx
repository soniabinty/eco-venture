import { useLoaderData } from "react-router-dom";
import Card from '../Card/Card'

const Experiences = () => {
  const adventures = useLoaderData();

  console.log(adventures); 

  return (

    
    <div className="w-11/12 mx-auto my-16 ">

     <h1 className='md:text-5xl text-center text-blue-400 text-2xl font-bold '>WE HAVE SOME FOCUSED EXPERIENCES</h1>  
     <p className="text-center text-gray-600 mt-4">
        Discover handpicked adventures designed to inspire, thrill, and create memories. 
        Choose your next experience and embark on a journey like no other!
      </p>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-8 gap-4px-4">
  
      {adventures.map((adventure) => (
        <Card key={adventure.id} adventure={adventure} />
      ))}
   </div>
    </div>
  );
};
export default Experiences;