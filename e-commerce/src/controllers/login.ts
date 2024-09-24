import { Request, Response } from "express";
import { prismaClient } from "../index.js";
import { compareSync } from "bcrypt";
import  jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets.js";


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    let user = await prismaClient.admin.findFirst({ where: { email } });
    if (!user) {
        throw Error("User does not exists");
    }

    if (!compareSync(password, user.password)) {
        throw Error('Incorrect Password')
    }

    const token = jwt.sign({
        userId: user.id,
    }, JWT_SECRET)

    res.json({ user, token })
}