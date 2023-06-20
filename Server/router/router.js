import { Router } from "express";

import * as controllers from "../controllers/appController.js";

const router= Router();
// post method
router.route('/register').post(controllers.register); // register User  
// router.route('/registerMail').post();// send the email 
router.route('/authentication').post((req,res) => res.end());// authenticate the user 
router.route('/login').post(controllers.login);// login the user

//get methods

router.route('/user/:username').get(controllers.getUser);// get user with username
router.route('/generateOTP').get(controllers.generateOTP);// generate random OTP
router.route('/verifyOTP').get(controllers.verifyOTP);// verify OTP generated
router.route('/createResetSession').get(controllers.createResetSession);// reset all the variables
// put method

router.route('/updateUser').put(controllers.updateUser);// is used  to update user profile
router.route('/resetPassword').put(controllers.resetPassword);// use to reset password 


export default router;