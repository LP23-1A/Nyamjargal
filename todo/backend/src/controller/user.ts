import { Request, Response } from "express";
import { UserModel } from "../model/User";

type  SignUpType = {
    username: string
    password: string
    avatarImage: Buffer
}

export const Signup = async (req:Request ,res:Response) => {
    try {
             
        const {username, password} : Required<SignUpType> = req.body;
        const result = await UserModel.create(username, password);
        return res.status(201).send({success:true});
    } catch (error:any) {
        const {code} = error;
        if(code === 11000){
            return res.status(400).send({success:false, error: {msg:"Already existing username"}} )
        }
        return res.status(400).send({success:false, error: "Invalid request"});
    }

}