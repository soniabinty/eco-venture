import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const login = () => {
  const {userSignIn ,  setUser} = useContext(AuthContext)

  const handleSubmit =(e) =>{
    e.preventDefault()
    const form = new FormData(e.target)
       const email = form.get("email")
    const password = form.get("password")


    console.log({email , password})
    userSignIn(email,password)
    .then((result) =>{
  const user = result.user
  setUser(user)
  console.log(user)
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });


  }
  return (
    <div className='min-h-screen justify-center py-20 flex max-sm:p-4'>
        <div className="card bg-base-100 w-full md:max-w-lg shrink-0 border shadow-2xl p-3">
          <h2 className='text-3xl text-center pt-4 font-semibold'>Login Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control space-y-2">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>  
           <p className='text-center text-lg mt-4'>Don't Have an Account? <Link className='text-red-400' to={'/register'}>Register</Link></p>
      </form>
 
    </div>
      
    </div>
  );
};

export default login;