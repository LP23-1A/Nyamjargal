import express from "express";
import { signup, getAllUsers, login } from "../controller/user";

const auth = express.Router();

auth.route('/signup').post(signup);
auth.route('/users').get(getAllUsers);
auth.route('/login').post(login);

export {auth};


