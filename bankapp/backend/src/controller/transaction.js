import { pool } from "../db.js";

export const addTransaction =  async (req, response) => {
    const { amount, payeeUser, desc, value, userid } = req.body;
    console.log(req.body);
    try {
      const queryText = "INSERT INTO transactions (amount, name, description, category_id, user_id) VALUES ($1, $2, $3,$4, $5) RETURNING *";
    //  const queryText = "INSERT INTO transactions (name, amount, transaction_type, description) VALUES ($1, $2, $3,$4) RETURNING *";
    
      const res = await pool.query(queryText, [  amount, payeeUser,desc, value, userid ]);
      response.send(res.rows[0])
    } catch (error) {
      console.error(error);
      response.send('error query')
    }
  };

  export const getTransaction = async (req, res) => {
    try {
      // const queryText =`SELECT * FROM transactions`;
        const queryText = `SELECT c.name, t.amount FROM users u INNER JOIN transactions t ON u.id = t.user_id INNER JOIN category c ON t.category_id= c.id`;
        const response = await pool.query(queryText);
        console.log(response.rows);
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
};

  export const deleteTransaction= async (req, res) => {
    try {
        const queryText =`DELETE FROM transactions`;
        const response = await pool.query(queryText);
        console.log("Deleted TransactionS data");
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
  };
  
