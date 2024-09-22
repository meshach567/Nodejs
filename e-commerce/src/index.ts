import express, { Express } from 'express';
import http from 'http';
import { PORT } from './secrets.js';
import rootRouter from './routes/rootRouter.js';
import { PrismaClient } from '@prisma/client';

const app: Express = express();

app.use(express.json());

app.use('/api', rootRouter); 

export const prismaClient = new PrismaClient({ log: ["query"]});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
