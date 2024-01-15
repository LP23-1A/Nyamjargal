import express from 'express';
import {
    addCategory,
    getCategory
} from '../controller/category.js';

const category = express.Router();

category.route('/').post(addCategory).get(getCategory);
export {category};