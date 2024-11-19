import React, { useState } from 'react';
import { GiThreeLeaves } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/Picsart_24-11-20_00-21-43-451.png'

const Navbar = () => {

  const [open,setOpen] = useState(false)
  return (
    

     <div className='flex justify-between bg-cyan-100 w-11/12 mx-auto md:mt-10 mt-4 md:p-8 px-2 items-center rounded-t-2xl'>

      <div className='flex items-center'>
      <GiThreeLeaves className='text-green-800 md:text-4xl text-2xl' />
    
      <img className='lg:w-[220px] md:w-[180px] w-[80px]' src={logo} alt="logo"/>

     
      </div>


      <div className=' text-blue-400 gap-5'>
    <div className='md:hidden' onClick={() => setOpen(!open)}>
      {
      open === true?<IoMdClose />:<IoMdMenu />
      }
    
    </div>

    <div className={`md:gap-8 flex max-sm:flex-col max-sm:absolute md:text-xl duration-100 right-4 max-sm:p-3 max-sm:bg-blue-300 max-sm:text-white max-sm:rounded-sm ${open? 'top-12':'-top-60'}`}>
   <NavLink> Home</NavLink>
   <NavLink>Update Profile</NavLink>
   <NavLink className={'md:hidden'}>Login</NavLink>  
   <NavLink >My profile</NavLink>  
</div>
      </div>


      <div className='max-sm:hidden'>
        <button className='btn bg-blue-400 p-3 font-bold rounded-lg text-cyan-100'>
          Login
        </button>
        
      </div>




     </div>


      
  
  );
};

export default Navbar;