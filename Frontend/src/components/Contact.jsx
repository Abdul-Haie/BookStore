import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =async (data) => {
        const userQuery={
          fullname:data.fullname,
          email:data.email,
          note:data.note,
        }
        await axios.post("http://localhost:4001/contact/quereyMessage", userQuery)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success("Message Sent Successfully!");
          }
        }).catch((err)=>{
          console.log(err)
          toast.error("Error: "+err.response.data.message);
        })
      };
    
    
  const [submitColor, setSubmit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSubmit(true);
      } else {
        setSubmit(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl text-black font-bold text-center mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
              {...register("fullname", { required: "Email is required" })}
            />
            <br />
                {errors.fullname && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
            />
            <br />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your Message"
              {...register("note", { required: "Email is required" })}
            ></textarea>
            <br />
                {errors.note && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full bg-pink-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                submitColor
                  ? "w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  : ""
              } `}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
