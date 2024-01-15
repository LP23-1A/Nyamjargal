import express from "express";
import {
  createUserTable,
  createCategoryTable,
  createTransactionTable,
  deleteUsertable,
  deleteCategorytable,
  deleteTranscationtable,
  uuidExtension
} from "../controller/tables.js";

const table = express.Router();

table.route("/").post(createUserTable).delete(deleteUsertable);
table.route("/category").post(createCategoryTable).delete(deleteCategorytable);
table.route("/transaction").post(createTransactionTable).delete(deleteTranscationtable)
table.route("/extension").post(uuidExtension);

export { table };
