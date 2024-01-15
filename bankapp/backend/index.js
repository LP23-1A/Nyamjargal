import cors from 'cors';
import dotenv from "dotenv"
import postgres from "postgres"
import  express, { response }  from "express";
import {user} from "./src/router/userRouter.js"
import {table} from "./src/router/tablesRouter.js"
import {transaction} from "./src/router/transactionRouter.js"
import { category } from "./src/router/categoryRouter.js";
import {userlogin} from "./src/router/loginRouter.js"
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors({origin : "*"}));

app.use("/table", table);
app.use("/category", category);
app.use("/transaction", transaction);
app.use("/user", user);
app.use("/login",userlogin);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

/*
app.put ("/updateuser", async (req,response)=>{
  const { id,name, email } = req.body;
  try {
    const queryText = `UPDATE  users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
    await pool.query(queryText);
    response.send("Updated");
  } catch (error) {
    console.log(error);
  }
});
*/


