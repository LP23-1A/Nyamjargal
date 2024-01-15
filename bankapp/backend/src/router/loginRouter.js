import express from "express";
import {
  login
} from "../controller/login.js";

const userlogin = express.Router();

userlogin.route("/").post(login);


export { userlogin };
