import { Request, Response } from "express";
import { UserModel } from "../model/User";
import bcrypt from "bcrypt";

type  SignUpType = {
    _id: string
    username: string
    password: string
    avatarImage: Buffer
}


const Signup = async (req: Request, res: Response) => {
    try {
      const saltRounds = 10;
      const { username, password } = req.body;
      console.log("signup data", username,password);
      const hashP = await bcrypt.hash(password, saltRounds); 
      const user = new UserModel({ username, password: hashP });
      await user.save();
      res.status(201).send({ msg: 'user created' });
    } catch (error) {
      res.status(400).send({ msg: 'Invalid Request' });
    }
  };

const login = async (req: Request, res: Response) => {

    try {
      const { username ,password}: {username:string; password:string} = req.body;
      //console.log("wwwww",username,password);
      const user:SignUpType | null = await UserModel.findOne({ username });
      console.log(user);
      
      if(!user){
        return res.status(400).send({success:false, msg:"User not found"});
      }
      
      bcrypt.compare(password,user.password, async function (err,result){
        if(!result) {
          return res.send({
            success:false,
            msg:"username or password incorrect",
          });
        } else {
          return res.send({success:true, user});
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  export {Signup, getAllUsers, login};