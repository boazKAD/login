import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

// http://localhost:8080/api/register

export async function register(req, res) {
    try {
        const { username, password, email, profile } = req.body;
    
        const existUsername = UserModel.findOne({ username }).exec();
    
        const existEmail = UserModel.findOne({ email }).exec();
    
        Promise.all([existUsername, existEmail])
          .then(([usernameResult, emailResult]) => {
            if (usernameResult) {
              throw { error: "Please use a unique username" };
            }
            if (emailResult) {
              throw { error: "Please use a unique email" };
            }
    
            if (password) {
              bcrypt
                .hash(password, 10)
                .then((hashPassword) => {
                  const user = new UserModel({
                    username,
                    password: hashPassword,
                    email,
                    profile: profile || "",
                  });
                  user
                    .save()
                    .then((result) =>
                      res.status(201).send({ message: "User registered successfully" })
                    )
                    .catch((error) => {
                      console.error(error);
                      res.status(500).send(error);
                    });
                })
                .catch((error) => {
                  console.error(error);
                  res.status(500).send({
                    error: "Unable to hash the password",
                  });
                });
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send(error);
          });
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    }
    
// http://localhost:8080/api/login
export async function login(req, res) {
  res.json("login routes ");
}
// http://localhost:8080/api/user/username
export async function getUser(req, res) {
  res.json("get user routes ");
}
// http://localhost:8080/api/updateUser
export async function updateUser(req, res) {
  res.json("update user  routes ");
}
// http://localhost:8080/api/generateOTP
export async function generateOTP(req, res) {
  res.json("generateOTP  routes ");
}
// http://localhost:8080/api/verifyOTP
export async function verifyOTP(req, res) {
  res.json("verifyOTP  routes ");
}
// http://localhost:8080/api/createResetSession
export async function createResetSession(req, res) {
  res.json("createResetSession  routes ");
}
// http://localhost:8080/api/resetPassword
export async function resetPassword(req, res) {
  res.json("resetPassword  routes ");
}
