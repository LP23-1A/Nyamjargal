import express from "express";
import { Signup, getAllUsers, login } from "../controller/user";

const auth = express.Router();

auth.route('/signup').post(Signup);
auth.route('/users').get(getAllUsers);
auth.route('/login').post(login);

export {auth};
