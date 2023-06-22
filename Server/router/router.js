import { Router } from "express";

import * as controllers from "../controllers/appController.js";

const router= Router();
// post method
router.route('/register').post(controllers.register); 
// router.route('/registerMail').post();// send the email 
router.route('/authentication').post((req,res) => res.end());
router.route('/login').post(controllers.login);

//get methods

router.route('/user/:userName').get(controllers.getUser);
router.route('/generateOTP').get(controllers.generateOTP);
router.route('/verifyOTP').get(controllers.verifyOTP);
router.route('/createResetSession').get(controllers.createResetSession);
// put method

router.route('/updateUser').put(controllers.updateUser);
router.route('/resetPassword').put(controllers.resetPassword);


export default router;