import React, { useState, useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const [searchParams] = useSearchParams();

  useEffect(() => {
   
    const prefilledEmail = searchParams.get('email');
    if (prefilledEmail) setEmail(prefilledEmail);
  }, [searchParams]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent. Redirecting to Gmail...")
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen justify-center py-20 flex max-sm:p-4">
      <div className="card bg-base-100 w-full md:max-w-lg shrink-0 border shadow-2xl p-3">
        <h2 className="text-3xl text-center pt-4 font-semibold">Reset Your Password</h2>
        <form onSubmit={handleResetPassword} className="card-body">
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={email}
              placeholder="email"
              className="input input-bordered"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
