import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();

  // create user >>>
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user >>>
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // login user >>>
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logOut user >>>
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google log in >>>
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   facebook log in >>>
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider2);
  };

  // keep User on onAuthStateChanged >>>
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        console.log(currentUser);
      }
    });
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    updateUser,
    logOutUser,
    googleLogin,
    facebookLogin
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}

export default AuthProvider;
