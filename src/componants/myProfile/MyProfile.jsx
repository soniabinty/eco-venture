import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <p className="text-center text-xl">Loading...</p>; 
  }

  return (
    <div className="min-h-screen flex items-center max-sm:px-6 justify-center bg-gray-100">
      <div className="card bg-white shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-500">
          Welcome, {user.displayName || 'User'}!
        </h1>
        <div className="flex flex-col items-center">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-primary mb-4"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-600 mb-4">
              ?
            </div>
          )}
          <p className="text-lg font-medium">Name: {user.displayName || 'Not Provided'}</p>
          <p className="text-lg font-medium">Email: {user.email}</p>
          <Link to="/update" className="btn btn-primary mt-6">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;