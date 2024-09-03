import express from 'express';
import { users } from './data';

const app = express();

app.use(express.json());

// an array to use as an in-memory database

// define three sample endpoints
app.get("/api/v1/users/:userId", (req, res) => {
    const userId = req.params.userId;

    // find a user by id
    const user = users.find((user) => user.id == +userId);

    if (!user) {
        res.status(404).send('User is not found')
    } else {
        res.send({ user: user, })
    }
})


