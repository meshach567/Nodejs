import { getAllUsers } from '../controller/users.js';
import { isAuthenticated } from '../middleware/index.js';
export default (router) => {
    router.get('/users', isAuthenticated, getAllUsers);
};
//# sourceMappingURL=users.js.map