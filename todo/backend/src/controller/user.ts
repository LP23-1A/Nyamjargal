import { Request, Response } from "express";
import { UserModel } from "../model/User";
import bcrypt from "bcrypt";

type  SignUpType = {
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
      res.status(201).send({ msg: 'user created successfully' });
    } catch (error) {
      res.status(400).send({ msg: 'Invalid Request' });
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


const login = async (req: Request, res: Response) => {

    try {
      const { username, password } = req.body;
      console.log("reqesteeeee",req.body);
   
      const user = await UserModel.findOne({ username,password });
 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  export {Signup, getAllUsers, login};