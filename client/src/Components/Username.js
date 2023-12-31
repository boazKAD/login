import React from "react";
import avatars from "../assets/profile.png";
import { Link } from "react-router-dom";
import Styles from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidater } from "../helpers/validete";

export default function Username() {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidater,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto h-screen">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center pt-6">
        <div className={Styles.glass}>
          <div className="title flex flex-col items-center ">
            <h3 className="text-5xl font-bold"> Hello Again! </h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us .
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className=" profile flex  justify-center py-4">
              <img src={avatars} className={Styles.profile_img} alt="avatar" />
            </div>

            <div className="text-box flex flex-col items-center gap-6 ">
              <input
                {...formik.getFieldProps("username")}
                className={Styles.textbox}
                type="text"
                placeholder="Username"
              />
              <button className={Styles.btn} type="submit">
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member
                <Link className="text-red-500" to="/Register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
