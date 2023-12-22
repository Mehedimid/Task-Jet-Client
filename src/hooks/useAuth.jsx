import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

function useAuth(props) {
    const useAuth = useContext(authContext)
    return  useAuth ;
}

export default useAuth;