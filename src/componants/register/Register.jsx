import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';


const Register = () => {
  const {createNewUser ,  setUser, updateUserProfile ,googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleGoogle =() =>{
    googleSignIn()
    .then((result) =>{
      const user = result.user
      setUser(user)
      navigate("/");
      
        })
      
  }






const handleSubmit =(e) =>{
  e.preventDefault()
  const form = new FormData(e.target)
  const name = form.get("name")
  const photo = form.get("photo")
  const email = form.get("email")
  const password = form.get("password")



  const passwordErrors = [];
  if (!/[A-Z]/.test(password)) {
    passwordErrors.push("Password must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    passwordErrors.push("Password must contain at least one lowercase letter.");
  }
  if (password.length < 6) {
    passwordErrors.push("Password must be at least 6 characters long.");
  }

  if (passwordErrors.length > 0) {
  
    toast.error(passwordErrors.join(" "));
    return 

  }


  createNewUser(email,password)
  .then((result) =>{
const user = result.user
setUser(user)
updateUserProfile({ displayName: name, photoURL: photo })
.then(() => {

  navigate("/");
})
.catch((err) => {
     
  toast.error("Register Failed.PLease Try Again!!")
 });



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });

}

  return (
    <div className='justify-center py-20 flex max-sm:p-4'>
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

export default Register;