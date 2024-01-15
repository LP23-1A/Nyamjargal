import {pool} from "../db.js"


export const login = async (req, res) => {

    const { email , password } = req.body;
    console.log("hvselt ", req.body);
    try {
        const queryText = `SELECT * FROM users WHERE email='${email}' AND password = '${password}'`;
        const response = await pool.query(queryText);
        console.log(response);
      if (response.rows.length !== 0 ) {
          res.send("success");
       } else {
          throw error
       }
      } catch (error) {
        res.status(400).send('Wrong username and password');
      }
};