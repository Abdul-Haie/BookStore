import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Use a ref to control the dialog
  const dialogRef = useRef(null);

  const onSubmit =async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success("Login Successfully!");
        }
        localStorage.setItem("User",JSON.stringify(res.data.user));
    }).catch((err)=>{
      console.log(err)
      toast.error("Error: "+err.response.data.message);
    })
  };

  // Function to close the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" ref={dialogRef}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button will call closeDialog */}
            <button
              type="button"
              onClick={closeDialog}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-4 space-y-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
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
                Login
              </button>
              <div>
                <span>Not Registered?</span>{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
