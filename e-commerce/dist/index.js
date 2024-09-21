import express from 'express';
import http from 'http';
const app = express();
app.get('/', (req, res) => {
    res.send('working');
});
const server = http.createServer(app);
server.listen(8080, () => {
    console.log('server is running on http://localhost:8080');
});
//# sourceMappingURL=index.js.map