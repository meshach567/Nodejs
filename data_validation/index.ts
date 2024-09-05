import express, { query } from 'express';
import { users } from './data';
import {
    validationResult,
    matchedData,
    checkSchema,
} from 'express-validator';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// an array to use as an in-memory database

// define three sample endpoints
app.get(
    "/api/v1/users/:userId",
    checkSchema(
        {
            userId: { isInt: true },
        },
        ["params"]
    ),
    (req: any, res: any) => {
        // extract the data validation result
        const result = validationResult(req);
        if (result.isEmpty()) {
            const userId = req.params.userId;
            // find a user by id
            const user = users.find((user) => user.id == userId);

            if (!user) {
                res.status(404).send("User not found!");
            } else {
                res.send({
                    user: user,
                });
            }
        } else {
            res.status(400).send({ errors: result.array() });
        }
    }
);



app.get(
    "/api/v1/users",
    checkSchema(
        {
            search: { optional: true, trim: true, notEmpty: true },
        },
        ["query"]
    ),
    (req: any, res: any) => {
        // extract the data validation result
        const result = validationResult(req);
        if (result.isEmpty()) {
            // select all users by default
            let filteredUsers = users;

            // read the matched query data from "req"
            const data = matchedData(req);
            const search = data.search;
            if (search !== undefined) {
                // filter users by fullName with a case-insensitive search
                filteredUsers = users.filter((user) => {
                    return user.fullName.toLowerCase().includes(search.toLowerCase());
                });
            }

            res.send({
                users: filteredUsers,
            });
        } else {
            res.status(400).send({ errors: result.array() });
        }
    }
);




app.post(
    "/api/v1/users",
    checkSchema(
        {
            fullName: {
                trim: true,
                notEmpty: true,
            },
            email: {
                errorMessage: "Not a valid e-mail address",
                isEmail: true,
            },
            age: {
                isInt: { options: { min: 18 } },
            },
        },
        ["body"]
    ),
    (req: any, res:any) => {
        // extract the data validation result
        const result = validationResult(req);
        if (result.isEmpty()) {
            // read the body data from the matched data
            const newUser = matchedData(req);
            const maxId = users.reduce(
                (max, user) => (user.id > max ? user.id : max),
                0
            );

            // add a new user with an auto-incremented id
            users.push({
                id: maxId + 1,
                ...newUser,
                email: '',
                fullName: '',
                age: 0
            });

            res.status(201).send();
        } else {
            res.status(400).send({ errors: result.array() });
        }
    }
);



// start the server locally on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});