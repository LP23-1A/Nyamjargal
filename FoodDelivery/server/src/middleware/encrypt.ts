import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

export const encrypt = (req:Request, res:Response,next:NextFunction)=> {
    const SALT = 12;
    req.body.password = "123";        
    next();
}