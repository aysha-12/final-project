import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, GoogleAuthProvider, signOut, signInWithPopup, updateProfile, onAuthStateChanged} from "firebase/auth"




export const AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
console.log(children);


const googleprovider = new GoogleAuthProvider()
  const [option, setOption] = useState({})


  const [user, setUser] = useState({})
  

  const [userLoding, SetUserLoding] = useState(true)





  //  creat
  const createUser = (email, password) => {
    SetUserLoding(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login
  const loging = (email, password) => {
    SetUserLoding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  // google
  const google = () => {
    return signInWithPopup(auth, googleprovider)


  }

  // upDate User
  const upDateUser = (name) => {
    SetUserLoding(true)
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {

    }).catch((error) => {

    });
  }


  // tracking
  useEffect(() => {
    const tracking = onAuthStateChanged(auth, (username) => {
      setUser(username)
      SetUserLoding(false)
      return () => tracking()

    });
  }, [])

  // signOut

  const logOut = () => {
    SetUserLoding(false)
    return signOut(auth)

  }




  const send = {
    option,
    setOption,
    createUser,
    user,
    setUser,
    loging,
    google,
    userLoding,

    logOut,
    upDateUser

  }
  return (
    <AuthContext.Provider value={send}>
      {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;