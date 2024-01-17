import { pool } from "../db.js";

export const addTransaction =  async (req, response) => {
    const { name, amount, transaction_type, description } = req.body;
    try {
      const queryText =
        "INSERT INTO transactions (name, amount, transaction_type, description) VALUES ($1, $2, $3,$4) RETURNING *";
      const res = await pool.query(queryText, [ name, amount,transaction_type,description ]);
      response.send(res.rows[0])
    } catch (error) {
      console.error(error);
      response.send('error query')
    }
  };

  export const getTransaction =  async (req, response) => {
    const { name, description, createAt, updateAt, category_image } = req.body;
    try {
      const queryText =
        "INSERT INTO category (name, description, createAt, updateAt, category_image) VALUES ($1, $2, $3,$4,$5) RETURNING *";
      const res = await pool.query(queryText, [ name, description,createAt,updateAt,category_image ]);
      response.send(res.rows[0])
    } catch (error) {
      console.error(error);
      response.send('error query')
    }
  };
