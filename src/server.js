require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {useNewUrlParser: true});

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT);