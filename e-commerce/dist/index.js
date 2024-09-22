import express from 'express';
import http from 'http';
import { PORT } from './secrets.js';
import rootRouter from './routes/rootRouter.js';
const app = express();
app.use('/api', rootRouter);
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map