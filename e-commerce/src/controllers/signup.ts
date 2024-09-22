import { Request, Response } from "express";
import { prismaClient } from "../index.js";
import bcrypt from "bcrypt";


export const signup = async (req: Request, res: Response) => {
    const { email, password, name} = req.body;

    let user = await prismaClient.admin.findFirst({where: { email }});
    if (user) {
        throw Error("User already exists");
    }

    user  = await prismaClient.admin.create({
        data: {
          name,
          email,
          password: bcrypt.hashSync(password, 10)
          
        },
      })

      res.json(user)
}