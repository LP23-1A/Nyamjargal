import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDatabase } from "./utils/database";
import { auth } from "./router/auth";
dotenv.config();
const PORT = process.env.PORT || 8000;
connectDatabase();
const start = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use('/auth', auth);

  app.get("/", (_req, res) => {
    res.status(200).send({ success: true, msg: "Working" });
  });

  app.listen(PORT, () => {
    console.log("Server is running!!!");
  });
};
start();
