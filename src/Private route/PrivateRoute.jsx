import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../shared components/Loading";


function PrivateRoute({children}) {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
       return <Loading></Loading>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location?.pathname}}></Navigate>
    }

    return children ;
    
}

export default PrivateRoute;