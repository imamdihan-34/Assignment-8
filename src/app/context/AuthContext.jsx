"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const login = (email, pass) =>
    signInWithEmailAndPassword(auth, email, pass);

  const register = async (email, pass, name, photo) => {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(res.user, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logout = () => signOut(auth);

  const googleLogin = () =>
    signInWithPopup(auth, new GoogleAuthProvider());

  const updateUser = (name, photo) =>
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, googleLogin, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);