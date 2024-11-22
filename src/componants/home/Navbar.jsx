import React, { useContext, useState } from 'react';
import { GiThreeLeaves } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/Picsart_24-11-20_00-21-43-451.png'
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
const {user , logOut} =useContext(AuthContext)
  const [open,setOpen] = useState(false)
  return (
    

     <div className='flex justify-between w-11/12 mx-auto md:mt-6 mt-2 lg::px-8 px-2 items-center rounded-t-2xl'>

      <div className='flex items-center'>
      <GiThreeLeaves className='text-green-800 md:text-4xl text-2xl' />
   
      <img className='lg:w-[220px] md:w-[180px] w-[80px]' src={logo} alt="logo"/>

     
      </div>



      <div className=' text-blue-400 gap-5 flex items-center'>
        
      <div className="relative group md:hidden">
  {user?.photoURL ? (
    <img
      className="w-9 h-9 rounded-full border-2 border-blue-600"
      src={user.photoURL}
      alt="profile"
    />
  ) : (
    <div className="w-9 h-9 rounded-full border-2 border-blue-600 bg-gray-200"></div>
  )}
  {user?.displayName && (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-14 bg-gray-700 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {user.displayName}
    </div>
  )}
</div>

    <div className='md:hidden' onClick={() => setOpen(!open)}>
      {
      open === true?<IoMdClose />:<IoMdMenu />
      }
    
    </div>

    <div className={`md:gap-8 flex max-sm:flex-col max-sm:absolute md:text-xl duration-100 right-4 max-sm:p-3 max-sm:bg-blue-300 max-sm:text-white max-sm:rounded-sm max-sm:z-50 ${open? 'top-12':'-top-60'}`}>
   <NavLink> Home</NavLink>
   <NavLink to={'/update'}>Update Profile</NavLink>
   {
          user && user.email ? ( 
            <NavLink onClick={logOut} className={'md:hidden'}>LogOut</NavLink>  ):( 
   <NavLink  to={'/login'} className={'md:hidden'}>Login</NavLink>  )
        }
  
 
   <NavLink to={'/myprofile'} >My profile</NavLink>  
</div>
      </div>


      <div className='max-sm:hidden flex gap-3 items-center'>

      <div className="relative group">
  {user?.photoURL ? (
    <img
      className="w-12 h-12 rounded-full border-2 border-blue-600"
      src={user.photoURL}
      alt="profile"
    />
  ) : (
    <div></div>
  )}
  {user?.displayName && (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-14 bg-gray-700 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {user.displayName}
    </div>
  )}
</div>

        {
          user && user.email ? (<Link onClick={logOut}  className=' bg-blue-400 p-3 font-bold rounded-lg text-cyan-100'>
            LogOut
          </Link>):(<Link to={'/login'} className=' bg-blue-400 p-3 font-bold rounded-lg text-cyan-100'>
          Login
        </Link>)
        }
        
        
      </div>




     </div>


      
  
  );
};

export default Navbar;