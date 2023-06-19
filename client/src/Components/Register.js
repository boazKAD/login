import React, { useState } from "react";
import avatars from "../assets/profile.png";
import { Link } from "react-router-dom";
import Styles from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { RegisterValidation } from "../helpers/validete";
import convertToBase64 from "../helpers/convert";

export default function Register() {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      Email: "",
      username: "",
      password: "admin@123",
    },
    validate: RegisterValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  const OonUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center pt-6">
        <div className={Styles.glass}>
          <div className="title flex flex-col items-center ">
            <h3 className="text-5xl font-bold"> Register </h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happ to join you !.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className=" profile flex  justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatars}
                  className={Styles.profile_img}
                  alt="avatar"
                />
                <input  onChange={OonUpload} type="file" id="profile" name="profile" />
              </label>
            </div>
            <div className="text-box flex flex-col items-center gap-6 ">
              <input
                {...formik.getFieldProps("Email")}
                className={Styles.textbox}
                type="text"
                placeholder="email"
              />
              <input
                {...formik.getFieldProps("username")}
                className={Styles.textbox}
                type="text"
                placeholder="username"
              />
              <input
                {...formik.getFieldProps("password")}
                className={Styles.textbox}
                type="text"
                placeholder="password"
              />
              <button className={Styles.btn} type="submit">
                Register
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already registered?
                <Link className="text-red-500" to="/">
                  Login Now 
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
