import React from "react";
import avatars from "../assets/profile.png";
import { Link } from "react-router-dom";
import Styles from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {passwordVeridater} from "../helpers/validete"

export default function Recovery() {
  return (
    <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={Styles.glass}>
          <div className="title flex flex-col items-center ">
            <h3 className="text-5xl font-bold"> Recovery </h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OPT to Recover Password .
            </span>
          </div>
          <form className='pt-20' >

            <div className="input  text-center">
            <span className="py-4 text-sm text-left text-gray-500">
                Enter 6 digits OPT sent to your Email Address.
              </span>
              <input
                className={Styles.textbox}
                type="text"
                placeholder="password"
              />
            </div>

            <div className="text-box flex flex-col items-center gap-6 ">
             
              <button className={Styles.btn} type="submit">
                {" "}
                Sign in
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OPT ?
                <button className="text-red-500" >
                  Resend 
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
