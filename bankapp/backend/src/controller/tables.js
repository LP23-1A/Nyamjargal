import { pool } from "../db.js";

export const uuidExtension = async (_, res) => {
  try {
    const extensionQuery = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await pool.query(extensionQuery);
    res.send("Extension installed");
  } catch (error) {
    console.error(error);
  }
};

export const createUserTable = async (req, res) => {
  try {
    const tableQueryText = `
      CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4() ,
        email VARCHAR(50) UNIQUE NOT NULL,
        name VARCHAR(50) NOT NULL,
        password TEXT,
        avatar_img bytea,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW(),
        currency_type TEXT DEFAULT 'MNT'
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
          id uuid PRIMARY KEY DEFAULT uuid_generate_v4() ,
          name VARCHAR(100) NOT NULL,
          description TEXT,
          createAt TIMESTAMP DEFAULT NOW(),
          updateAt TIMESTAMP DEFAULT NOW(),
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
          id uuid PRIMARY KEY DEFAULT uuid_generate_v4() ,
          user_id,
          name TEXT,
          amount REAL NOT NULL,
          transaction_type ENUM("INC", "EXP"),
          description TEXT,
          createdAt TIMESTAMP DEFAULT NOW(),
          updatedAt TIMESTAMP DEFAULT NOW(),
          category_id

        )`;
    await pool.query(tableQueryText);
    res.send("Transaction Table Created");
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
