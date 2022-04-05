import express from 'express';
import config from './config';
import apiRouter from './api';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
res.render('index', {
    content: 'hello express and <em>ejs</em>'
});
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('express listening on port ', config.port);
});