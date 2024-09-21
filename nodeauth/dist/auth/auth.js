import crypto from 'crypto';
const secret = 'NODEAUTH-REST-API';
export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt, password) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(secret).digest('hex');
};
//# sourceMappingURL=auth.js.map