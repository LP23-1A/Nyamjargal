import express from "express";
import { Signup } from "../controller/user";

const auth = express.Router();

auth.route('/signup').post(Signup);
export {auth};