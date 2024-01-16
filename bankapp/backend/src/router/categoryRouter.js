import express from 'express';
import {
    addCategory,
    getCategory,
    deleteCategory
} from '../controller/category.js';

const category = express.Router();

category.route('/').post(addCategory).get(getCategory).delete(deleteCategory);
export {category};