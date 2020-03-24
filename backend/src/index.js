const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json()); //Avisando a aplicação que estamos utilizando json no corpo das requisições

app.use(routes);

app.listen(3333);