import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import ENV from "../config.js";
import jwt from "jsonwebtoken";

//  middleware
export async function verifyUser(req, res, next) {
  try {
    const { username } = req.method === "GET" ? req.query : req.body;

    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    next();
  } catch (err) {
    console.error("Error checking username:", err);
    return res.status(500).send("Internal Server Error");
  }
}

// http://localhost:8080/api/register

export async function register(req, res) {
  const { username, password, email, profile } = req.body;
  try {
    const existingUser = await UserModel.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      return res.status(409).json({
        message:
          "Email or username already exists. Please choose a different one.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      password: hashedPassword,
      email,
      profile,
    });
    const result = await newUser.save();

    return res
      .status(201)
      .json({ message: "User registered successfully.", result });
  } catch (err) {
    console.error("Error registering user:", err);
    return res.status(500).send("Internal Server Error");
  }
}

// http://localhost:8080/api/login
export async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ error: "Invalid password" });
    }
    const expiresIn = "24h"; // Token expiration time

    const token = jwt.sign({ userId: user._id }, ENV.JWT_SECRET, { expiresIn });

    return res.status(200).send({
      msg: "Login Successful...!",
      username: user.username,
      token: token,
    });
  } catch (err) {
    console.error("Error logging user:", err);
    return res.status(500).send("Internal Server Error");
  }
}

// http://localhost:8080/api/user/username
export async function getUser(req, res) {
  try {
    const { userName } = req.params;
    const result = await UserModel.find({ username: userName }).select(
      "-password"
    );

    if (result.length === 0) {
      return res.status(404).send({ error: "User not found" });
    }

    return res.status(200).send({ msg: "success", result });
  } catch (error) {
    console.log("error finding user by username", error);
    return res.status(500).send("Internal Server Error");
  }
}
// http://localhost:8080/api/updateUser
export async function updateUser(req, res) {
  const { username, fistName, lastName, mobile, address, profile } = req.body;
  try {
    const { id } = req.params;
    const result = await UserModel.findOneAndUpdate(
      { _id: id },
      { username, fistName, lastName, mobile, address, profile },
      { new: true }
    ) . select('-password');
    if (!result) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.status(200).send({ msg: "success", result });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).send({ error: "Invalid user ID" });
    }
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
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
