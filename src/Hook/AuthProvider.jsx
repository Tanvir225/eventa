import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";

// create a global authContext
export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {

    //state for hold user
    const [user,setUser] = useState(null)


    //create user funtionality 
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const authInfo = {createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;