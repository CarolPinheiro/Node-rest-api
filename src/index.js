const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

const customers = [];

app.use(express.json())

app.post("/account", (request, response) => {

  const { cpf, name } = request.body;

  const uuid = uuidv4();

  customers.push({ cpf, name, uuid, statement: [] })

  return response.status(201).send()

})

app.listen('3333');

