import express from 'express';
import {
    addTransaction,
    getTransaction
} from '../controller/transaction.js';

const transaction = express.Router();

transaction.route('/').post(addTransaction).get(getTransaction);
export {transaction};