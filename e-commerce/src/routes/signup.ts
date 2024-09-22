import { Request, Response } from "express";

import { prismaClient } from "index.js";


export const signup = async (req: Request, res: Response) => {
    const { email, password, name} = req.body;

    let user = await prismaClient.user.findFirst({})
}