import { Router } from "express";

import * as controllers from "../controllers/appController.js";

const router= Router();
// post method
router.route('/register').post(controllers.register); // register User  
router.route('/registerMail').post();// send the email 
router.route('/authentication').post();// authenticate the user 
router.route('/login').post();// login the user

//get methods

router.route('/user/:username').get();// get user with username
router.route('/generateOTP').get();// generate random OTP
router.route('/verifyOTP').get();// verify OTP generated
router.route('/createResetSession').get();// reset all the variables
// put method

router.route('/updateUser').put();// is used  to update user profile
router.route('/resetPassword').put();// use to reset password 


export default router;