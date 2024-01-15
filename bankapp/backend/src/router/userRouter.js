import express from "express";
import {createUser,getUsers,deleteUser, updateUser,
} from "../controller/user.js";
import {addCategory,getCategory} from "../controller/category.js";

const user = express.Router();

user.route("/").post(createUser).get(getUsers).delete(deleteUser).put(updateUser);
user.route("/category").post(addCategory).get(getCategory);
export { user };
