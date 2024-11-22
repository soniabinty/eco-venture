import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Update = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const photoURL = form.get('photoURL');

    if (user) {
      updateProfile(user, { displayName: name, photoURL })
        .then(() => {
       
          navigate('/myprofile')
        })
        .catch((error) => {
        
        });
    } else {
     
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-10">
      <div className="card bg-base-100 shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">Update Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ''}
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              defaultValue={user?.photoURL || ''}
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
