import React from "react";
import facebook from "../../assets/facebook.png"
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Facebook(props) {
  const {facebookLogin} = useAuth()
  const navigate = useNavigate()

  const handleCreateUser = () => {
   facebookLogin()
   .then(result => {
    navigate('/')
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
    <div
      onClick={handleCreateUser}
      className="hover:cursor-pointer">
      <img src={facebook} className="w-8" />
    </div>
  );
}

export default Facebook;
