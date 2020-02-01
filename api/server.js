const express = require('express');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex');
const dbConnection = require('../data/dbConfig.js');

const authRouter = require('../auth/auth-router.js');
const eventsRouter = require('../events/events-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

const sessionConfig = {
    name: 'originalsid',
        secret: process.env.SESSION_SECRET || 'yada yada yada',
        cookie: {
            maxAge: 1000 * 60 * 60,
            secure: false, //true when pushed to production
            httpOnly: true,
        },
        resave: false,
        saveUninitialized: true, //laws dictate you must inform user youre using cookies before this can be true
        store: new KnexSessionStore({ //persists session information through database
            knex: dbConnection,
            tablename: 'sessions',
            sidfieldname: 'sid',
            createtable: true,
            clearInterval: 60000
        })
}

server.use(session(sessionConfig));
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/events', eventsRouter);
server.use('/api/auth', authRouter);

module.exports = server;