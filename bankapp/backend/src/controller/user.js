import { pool } from "../db.js";
import { uuid } from "uuidv4";

//const id = uuid();

export const createUser =  async (req, response) => {
  const { name , email, password,currency_type } = req.body;
  console.log(req.body);
  try {
    const queryText =
      "INSERT INTO users (name, email, password, currency_type) VALUES ($1, $2, $3, $4) RETURNING *";
    const res = await pool.query(queryText, [ name,email,password,currency_type]);
    console.log("succss");
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send('error query eee')
  }
};

 export const getUsers = async (req, res) => {
    try {
        const queryText =
        `SELECT * FROM users`;
        const response = await pool.query(queryText);
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
};

export const updateUser =  async (req,response)=>{
  const { id,name, email } = req.body;
  try {
    const queryText = `UPDATE  users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
    await pool.query(queryText);
    response.send("Updated");
  } catch (error) {
    console.log(error);
  }
};


export const deleteUser = async (req,response)=> {
    const { name,email } = req.body;
    try {
      const queryText =
     `DELETE FROM users WHERE name = '${name}' AND email = '${email}'`;
     // `DELETE FROM users WHERE name = '(${name}' AND email = '${email}') OR '${id}'`;
        await pool.query(queryText);
        response.send("Success");
    } catch (error) {
      console.log(error);
    }
  };

