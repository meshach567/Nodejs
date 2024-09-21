import express from 'express';
import { getUsersBySessionToken } from '../model/usermodel.js';

import pkg from 'lodash';
const { merge } = pkg;


export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['NODEAUTH-AUTH'];

        if (!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = await getUsersBySessionToken(sessionToken);

        if (!existingUser) {
            return res.sendStatus(403);
        }

        merge(req, { identity: existingUser });

        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}