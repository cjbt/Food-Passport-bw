const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('../data/dbConfig');
const authRouter = require('../auth/authRouter');
const restRouter = require('./restaurants/restaurantsRoute');
const passRouter = require('./city/cityRoutes');
const { authenticate } = require('../auth/authMiddleWare');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('<h1>API is working 🔥</h1>');
});

server.use('/auth', authRouter);
server.use('/api/rest', restRouter);
server.use('/api/passport', passRouter);

server.get('/api/users', authenticate, (req, res) => {
  db('users')
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = server;
