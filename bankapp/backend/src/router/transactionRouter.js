import express from 'express';
import {
    addTransaction,
    getTransaction,
    deleteTransaction
} from '../controller/transaction.js';

const transaction = express.Router();

transaction.route('/').post(addTransaction).get(getTransaction).delete(deleteTransaction);
export {transaction};