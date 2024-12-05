import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext=createContext(null);

const Authprovider = ({children}) => {

        const[user,setUser]=useState();
        const[loading,setLoading]=useState(true);
    //register
    const register=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //update profile

    const handleUpdateProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })

    }

    //login
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    //signout

    const Signout=()=>{
        setLoading(true);
        signOut(auth)
        .then(()=>{})
        .catch(err=>console.log(err));
    }

    // ovserver

    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    },[])

    const authInfo={
        register,
        handleUpdateProfile,
        user,
        login,
        Signout,
        loading,
        setUser,
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;