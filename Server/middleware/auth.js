import jwt from "jsonwebtoken";
import ENV from "../config.js";

export async function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "you are not authorized" });
    }
    jwt.verify(token, ENV.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      req.userId = decoded.userId;
      next();
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
}
