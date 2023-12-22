import Swal from "sweetalert2"
import google from "../../assets/google.png"
import useAuth from "../../hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom"

function Google(props) {
    const {googleLogin} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const newLocation = location.state?.from || "/";
  

    const handleCreateUser = () => {
        googleLogin()
        .then(result => {
         navigate(newLocation)
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Your work has been saved",
           showConfirmButton: false,
           timer: 1500
         });
        }).catch(err=> {
         console.err(err.message)
        })
       }

    return (
        <div onClick={handleCreateUser} className="hover:cursor-pointer">
            <img src={google} className="w-8" />
        </div>
    );
}

export default Google;

