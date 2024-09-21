import express, { Express } from 'express';
import http from 'http';

const app: Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('working')
});

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})
