import React, { useState } from "react";
import avatars from "../assets/profile.png";
import { Link } from "react-router-dom";
import Styles from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { ProfileValidation } from "../helpers/validete";
import convertToBase64 from "../helpers/convert";

import extend from "../style/profile.module.css";

export default function Profile() {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      FileName: "",
      LastName: "",
      Email: "",
      Mobile: "",
      address: "admin@123",
    },
    validate: ProfileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
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
        <div className={`${Styles.glass} ${extend.glass}`} style={{ width: "45%", paddingTop: '3em'}}>
          <div className="title flex flex-col items-center  ">
            <h3 className="text-5xl font-bold"> Profile </h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              you can update the ditails .
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className=" profile flex  justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatars}
                  className={`${Styles.profile_img} ${extend.profile_img}`}
                  alt="avatar"
                />
                <input
                  onChange={OonUpload}
                  type="file"
                  id="profile"
                  name="profile"
                />
              </label>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("FirstName")}
                  className={`${Styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="FirstName"
                />
                <input
                  {...formik.getFieldProps("LastName")}
                  className={`${Styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="LastName"
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("mobile")}
                  className={`${Styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Mobile No."
                />
                <input
                  {...formik.getFieldProps("Email")}
                  className={`${Styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="email"
                />
              </div>

              <input
                {...formik.getFieldProps("address")}
                className={`${Styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Address"
              />
              <button className={Styles.btn} type="submit">
                Update
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                come back later ?
                <Link className="text-red-500" to="/">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
