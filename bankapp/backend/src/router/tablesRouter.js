import express from "express";
import {
  createUserTable,
  createCategoryTable,
  createTransactionTable,
  deleteUsertable,
  deleteCategorytable,
  deleteTranscationtable,
} from "../controller/tables.js";

const table = express.Router();

table.route("/").post(createUserTable).delete(deleteUsertable);
table.route("/category").post(createCategoryTable);
table.route("/category").post(createCategoryTable);

export { table };
