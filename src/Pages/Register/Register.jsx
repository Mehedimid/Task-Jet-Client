import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
import Facebook from "../../shared components/social login/Facebook";
import Google from "../../shared components/social login/Google";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

function Register(props) {
  const { createUser, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        updateUser(data.name, data.photo)
          .then(() => {
            console.log("update user");
            Swal.fire({
              position: "top-start",
              icon: "success",
              title: "Successfully Register!!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((err) => console.err(err.message));
  };

  return (
    <div className="min-h-screen bg-[#D5FFD0] ">
      <div className="bg-black ">
        <Navbar />
      </div>

      <div className="py-10 ">
        <div className=" bg-[#0C356A] py-5 w-11/12 md:w-1/2 lg:w-1/3 mx-auto relative">
          <h2 className="text-center text-[#D5FFD0] text-2xl font-semibold">
            Please Register
          </h2>

          <p className="text-[#D5FFD0] text-center mb-5">
            Already have an account?{" "}
            <Link to="/login" className="text-[#40F8FF]">
              Sign in here
            </Link>
          </p>

          {/* social login components  */}
          <div className="flex items-center justify-center gap-10 mb-5">
            <Google /> <Facebook />
          </div>

          <div className="divider divider-warning text-white">Or</div>

          {/* form start here  */}
          <form onSubmit={handleSubmit(onSubmit)}>

           {/* photo input  */}
          <div className="input-div">
              <input
                {...register("photo", { required: true })}
                placeholder="Photo URL"
                className="input-common"
              />
              {errors.photo && <p className="text-red-500">photoURL is required.</p>}
            </div>

            {/* Name input */}
            <div className="input-div">
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="input-common"
              />
              {errors.name && <p className="text-red-500">Name is required.</p>}
            </div>

            {/* Email input */}
            <div className="input-div">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                placeholder="Email"
                className="input-common"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password input */}
            <div className="input-div">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                placeholder="Password"
                className="input-common"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn-common hvr-bounce-to-top ml-2 md:ml-8">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
