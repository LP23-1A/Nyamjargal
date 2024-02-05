import { UserModel } from "../model/User"
import { Response,Request } from "express";

const UserRegistration = async (req:Request, res: Response) => {
    try {
        const register = await UserModel.create(req.body);
        res.status(201).send({success:true});
    } catch (error) {
        return res.status(400).send({error});
    }

  
}