import  express  from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;

import {connectDatabase} from "./utils/database"
import { auth } from "./router/User";
const start = () => {
    const app = express();
    const PORT = 8000;
    app.use(express.json());
    connectDatabase();
    app.use('/auth',auth);

    app.get('/', (req,res)=>{
        res.status(200).send({success:true,msg:'Hellow world'});
    })

    app.listen(PORT,()=>{
        console.log("Server is running");
    })
   
}
start();
