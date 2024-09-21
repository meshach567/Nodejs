import express from 'express';

import { deleteUser, getAllUsers } from '../controller/users.js';
import { isAuthenticated } from '../middleware/index.js';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', deleteUser);
};