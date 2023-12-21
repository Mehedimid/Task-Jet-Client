import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../navbar/Navbar';
import { Link } from 'react-router-dom';
import Google from '../../shared components/Google';
import Facebook from '../../shared components/social login/Facebook';

function Register(props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <div className=" ">
          <div className="bg-black ">
            <Navbar />
          </div>
    
          <div className="py-10 bg-[#D5FFD0] ">
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
    
              <div className="my-divider text-white text-center mb-5">OR</div>
    
              {/* form start here  */}
              <form onSubmit={handleSubmit(onSubmit)}>
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