const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());

app.use(express.json()); //Avisando a aplicação que estamos utilizando json no corpo das requisições

app.use(routes);

app.use(errors());

module.exports = app;