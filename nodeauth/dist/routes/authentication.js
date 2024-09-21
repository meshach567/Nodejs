import { register, login } from '../controller/authentication.js';
export default (router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
};
//# sourceMappingURL=authentication.js.map