import express from 'express';
import {
    alterTable,
    createUser,
    deleteUser,
    getOneUser,
    getUsers,
    updateUser,
    login
} from '../controller/user.js';

const user = express.Router();
user.route('/').get(getUsers).post(createUser);
user.route('/altertable').put(alterTable);
user.route('/user').get(getOneUser).delete(deleteUser).put(updateUser);
user.route('/login').get(login);
//user.route('deleteuser').delete(deleteUser);
export {user};


