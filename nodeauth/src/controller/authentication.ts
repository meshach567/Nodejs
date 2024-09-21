import express from 'express';
import { createUser, getUsersByEmail } from '../model/usermodel.js';
import { random, authentication } from '../auth/auth.js';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username} = req.body;

        if (!email || !password || !username) {
            return res.sendStatus(400);
        }

        const existingUser = await getUsersByEmail(email);
        const salt = random();
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password),
            },
        });

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}