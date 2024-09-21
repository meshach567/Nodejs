import { deleteUser, getAllUsers, updateUser } from '../controller/users.js';
import { admin, isAuthenticated } from '../middleware/index.js';
export default (router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, admin, deleteUser);
    router.patch('/users/:id', isAuthenticated, admin, updateUser);
};
//# sourceMappingURL=users.js.map