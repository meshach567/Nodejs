import express from 'express';

import { getAllUsers } from 'controller/users.js';

export default (router: express.Router) => {
    router.get('/users', getAllUsers);
};