import { getUsersBySessionToken } from '../model/usermodel.js';
import pkg from 'lodash';
const { merge, get } = pkg;
export const admin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const currentUserId = get(req, 'identity._id');
        if (!currentUserId) {
            return res.sendStatus(403);
        }
        if (currentUserId.toString() !== id) {
            return res.sendStatus(403);
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const isAuthenticated = async (req, res, next) => {
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
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
//# sourceMappingURL=index.js.map