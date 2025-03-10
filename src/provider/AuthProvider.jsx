import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {


  const [user,setUser] =useState(null)
  const [loading, setLoading] = useState(true)
  
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  
 

  const createNewUser =(email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userSignIn =(email,password) =>{
     setLoading(true)
  
    return signInWithEmailAndPassword(auth, email, password);
   
}

const updateUserProfile =(updateData) =>{
  return updateProfile(auth.currentUser, updateData)
}

  const logOut =() =>{
  setLoading(true)  
return signOut(auth)

  }
  const authInfo={
    user,
    setUser,
    createNewUser,
    logOut,
    userSignIn,
    loading,
    updateUserProfile,
    googleSignIn
  
  };


  useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth , currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })
    return() =>{
      unsubscribe()
    }

  },[])


  return (
<AuthContext.Provider value={authInfo}>
  {children}
</AuthContext.Provider>
  );
};

export default AuthProvider;