import express from 'express';
import {
    createUser,
    getUsers,
    getOneUser,
    deleteUser,
    updateUser  
} from '../controller/user.js';

const user = express.Router();

user.route('/').post(createUser).get(getUsers).delete(deleteUser).put(updateUser);
user.route('/login').post(getOneUser);


export {user};


