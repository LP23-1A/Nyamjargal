import { pool } from "../db.js";

export const createUserTable = async (_, res) => {
  try {
    const tableQueryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT,
        avatar_img bytea,
        createAt TIMESTAMP,
        updateAt TIMESTAMP,
        currency_type  TEXT DEFAULT 'MNT'
      )`;
    await pool.query(tableQueryText);
    res.send("Users Table Created");
  } catch (error) {
    console.error(error);
  }
};

export const createCategoryTable = async (_, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS category (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100),
          description TEXT,
          createAt TIMESTAMP,
          updateAt TIMESTAMP,
          category_image text
        )`;
    await pool.query(tableQueryText);
    res.send("Category Table Created");
  } catch (error) {
    console.error(error);
  }
};

export const createTransactionTable = async (_, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS transaction (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100),
          description TEXT,
          createAt TIMESTAMP,
          updateAt TIMESTAMP,
          category_image text
        )`;
    await pool.query(tableQueryText);
    res.send("Tranasaction Table Created");
  } catch (error) {
    console.error(error);
  }
};

export const deleteUsertable = async (req, response) => {
  try {
    const queryText = `DROP TABLE IF EXISTS users;`;
    await pool.query(queryText);
    response.send("deleted users table");
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategorytable = async (req, response) => {
  try {
    const queryText = `DROP TABLE IF EXISTS category;`;
    await pool.query(queryText);
    response.send("deleted category table");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTranscationtable = async (req, response) => {
  try {
    const queryText = `DROP TABLE IF EXISTS transaction;`;
    await pool.query(queryText);
    response.send("deleted transaction table");
  } catch (error) {
    console.log(error);
  }
};
