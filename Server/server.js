import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./database/conn.js";
const app = express();
import router from "./router/router.js";

dotenv.config();
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true}))
app.use(morgan('tiny'));

app.use("/api", router);

const PORT = process.env.PORT;

const server = () => {
    
  app.listen(PORT, () => {
    console.log(`Server connected to  http://localhost:${PORT}`.blue.bold);
  });
};
server();
