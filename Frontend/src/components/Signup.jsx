import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const onSubmit =async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success("Signup Successfully!");
        }
        localStorage.setItem("User",JSON.stringify(res.data.user));
    }).catch((err)=>{
      console.log(err)
      toast.error("Error: "+err.response.data.message);
    })
  };

  // Function to close the dialog and navigate back to the homepage
  const closeDialog = () => {
    // Redirect to homepage
    navigate('/'); // Change to the path of your homepage
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button for modal */}
              <button
                type="button"
                onClick={closeDialog}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className="mt-4 space-y-2">
                <label>Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  className="w-80 px-3 py-1 rounded-md outlone-none"
                  {...register("fullname", { required: "Name is required" })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 rounded-md outlone-none"
                  {...register("email", { required: "Email is required" })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 rounded-md outlone-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <div className="text-xl">
                  Have an Account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
