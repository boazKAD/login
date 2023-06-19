import React from "react";
import avatars from "../assets/profile.png";
import { Link } from "react-router-dom";
import Styles from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {ResetPasswordValidation} from "../helpers/validete"

export default function Reset() {
    const formik = useFormik({
        initialValues: {
          password: '',
          confirm_Pwd: ''
        },
        validate: ResetPasswordValidation,
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
        <div className={Styles.glass} style={{width:"50%"}}>
          <div className="title flex flex-col items-center ">
            <h3 className="text-5xl font-bold"> Rest </h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new Password .
            </span>
          </div>
          <form className='pt-20' onSubmit={formik.handleSubmit}>

            <div className="text-box flex flex-col items-center gap-6 ">
              <input
                {...formik.getFieldProps("password")}
                className={Styles.textbox}
                type="text"
                placeholder="New password"
              />
              <input
                {...formik.getFieldProps("confirm_Pwd")}
                className={Styles.textbox}
                type="text"
                placeholder="confirm password"
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
