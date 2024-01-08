import express from 'express';
import {
    createTable,
    deletetable,
    createUser,
    deleteUser,
    getUsers,
    getOneUser,
    updateUser,
    login
    
} from '../controller/user.js';

const user = express.Router();
user.route('/createtable').post(createTable);
user.route('/createuser').get(getUsers).post(createUser);
user.route('/user').get(getOneUser).delete(deleteUser).put(updateUser);
user.route('/user1').post(getOneUser);
user.route('/login').get(login);
user.route('/deletetable').delete(deletetable);
//user.route('deleteuser').delete(deleteUser);
export {user};


