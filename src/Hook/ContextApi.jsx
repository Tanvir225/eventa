import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const ContextApi = () => {
    const Context = useContext(AuthContext)
    return Context
};

export default ContextApi;