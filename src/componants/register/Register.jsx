import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
  const {createNewUser ,  setUser} = useContext(AuthContext)

const handleSubmit =(e) =>{
  e.preventDefault()
  const form = new FormData(e.target)
  const name = form.get("name")
  const photo = form.get("photo")
  const email = form.get("email")
  const password = form.get("password")
  console.log({name, photo, email , password})


  createNewUser(email,password)
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
      <h2 className='text-3xl text-center pt-4 font-semibold'>Register Your Account</h2>
  <form onSubmit={handleSubmit} className="card-body">
    <div className="form-control space-y-2">
    <label className="label">
        <span className="label-text text-xl">Name</span>
      </label>
      <input type="text" placeholder="name" name='name' className="input input-bordered" required />
      <label className="label">
        <span className="label-text text-xl">Photo URL</span>
      </label>
      <input type="text" placeholder="photo-url" name='photo' className="input input-bordered" required />
      
      <label className="label">
        <span className="label-text text-xl">Email</span>
      </label>
      <input type="email" placeholder="email" name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-xl">Password</span>
      </label>
      <input type="password" placeholder="password" name='password' className="input input-bordered" required />
    
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>  
       <p className='text-center text-lg mt-4'>Already Have an Account? <Link className='text-red-400' to={'/login'}>Login</Link></p>
  </form>

</div>
  
</div>
  );
};

export default Register;