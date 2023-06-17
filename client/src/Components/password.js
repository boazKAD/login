import React from "react";
import avatars from "../assets/profile.png";
import { Link } from "react-router-dom";
import Styles from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {passwordVeridater} from "../helpers/validete"

export default function Password() {
    const formik = useFormik({
        initialValues: {
          password: 'admin@123'
        },
        validate: passwordVeridater,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
          console.log(values);
        },
      })
  return (
    <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={Styles.glass}>
          <div className="title flex flex-col items-center ">
            <h3 className="text-5xl font-bold"> Hello Again! </h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us .
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className=" profile flex  justify-center py-4">
              <img src={avatars} className={Styles.profile_img} alt="avatar" />
            </div>

            <div className="text-box flex flex-col items-center gap-6 ">
              <input
                {...formik.getFieldProps("password")}
                className={Styles.textbox}
                type="text"
                placeholder="password"
              />
              <button className={Styles.btn} type="submit">
                {" "}
                Sign in
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                {" "}
                Forgote Password{" "}
                <Link className="text-red-500" to="/Recovery">
                  Recover Now{" "}
                </Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
