const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || 'HELLO WORLD'
    res.status(200).json({messageOfTheDay: messageOfTheDay})
})

server.use('/api', apiRouter);

module.exports = server;
