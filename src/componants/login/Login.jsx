import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { sendPasswordResetEmail } from 'firebase/auth';


const login = () => {
  const {userSignIn ,  setUser ,googleSignIn} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const emailRef =useRef()
  const [email, setEmail] = useState('');

  const handleGoogle =() =>{
    googleSignIn()
    .then((result) =>{
      const user = result.user
      setUser(user)
      navigate(location?.state ? location.state : "/");
      
        })
      
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    const form = new FormData(e.target)
       const email = form.get("email")
    const password = form.get("password")
    setEmail(email)
   
   

   
    userSignIn(email,password)
    .then((result) =>{
  const user = result.user
  setUser(user)
  navigate(location?.state ? location.state : "/");
  
    })
    .catch((err) => {
     
     toast.error("Login Failed.PLease Try Again!!")
    });


  }

  const handleForget = () =>{
 
    email = emailRef.current.value

    if(!email){
      toast.error("Please Provide an Email!!")
    }else{
      sendPasswordResetEmail(auth,email)
      .then
    }
  }
  return (
    <div className=' justify-center py-20 flex max-sm:p-4'>
        <div className="card bg-base-100 w-full md:max-w-lg shrink-0 border shadow-2xl p-3">
          <h2 className='text-3xl text-center pt-4 font-semibold'>Login Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control space-y-2">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input name='email' type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <Link to={'/forget'} className="label">
            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
          </Link>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary text-white">Login</button>
        </div>  
           <p className='text-center text-lg mt-4'>Don't Have an Account? <Link className='text-red-400' to={'/register'}>Register</Link></p>


      </form>


      <div className="flex flex-col mb-6 px-8">
          <button
          onClick={handleGoogle}
            className="btn btn-primary text-white w-full mt-4 flex"
          > <FaGoogle />
            Login with Google
          </button>
        </div>
 
    </div>
      
    </div>
  );
};

export default login;