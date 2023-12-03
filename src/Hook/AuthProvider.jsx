import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";
import { useEffect } from "react";

// create a global authContext
export const AuthContext = createContext(null);

//google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    //loading state
    const [loading,setLoading] = useState(true)

    //state for hold user
    const [user,setUser] = useState(null)


    //create user funtionality 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login user
    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    //logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    //google Login
    const google = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    //observe
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser);
        })

        return ()=> unSubscribe()
    },[])


    const authInfo = {createUser,logInUser,logOut,user,google,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;