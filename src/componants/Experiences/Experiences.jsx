import { useLoaderData, useNavigate } from "react-router-dom";
import Card from '../Card/Card'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Experiences = () => {
  const adventures = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
 
  const handleExplore = (id) =>{

    if(user){
      navigate(`/adventure/${id}`)
    } 
    else{

navigate('/login')

    }

  }

  



  return (

    
    <div className="max-w-screen-xl mx-auto my-16 ">
<div className="max-w-xl mx-auto my-6"> <h1 className='md:text-5xl text-center text-blue-400 text-2xl font-bold '>WE HAVE SOME FOCUSED EXPERIENCES</h1>  
     <p className="text-center text-gray-600 mt-4">
        Discover handpicked adventures designed to inspire, thrill, and create memories. 
        Choose your next experience and embark on a journey like no other!
      </p></div>
    
   <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-8 gap-4 px-4">
  
      {adventures.map((adventure) => (
        <Card key={adventure.id} adventure={adventure} handleExplore={handleExplore} />
      ))}
   </div>
    </div>
  );
};
export default Experiences;