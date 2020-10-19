const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');
const errorHandler = require('./errors/handler');
require('express-async-errors');

const app = express();
require('./database');

const PORTA = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.use(routes);
app.use(errorHandler);

app.use((req, res, next) => {
    const error = new Error("página não encontrada");
    error.status = 404;
    next(error); 
});

app.listen(PORTA, () => {
    console.log(`O pai tá on na porta ${PORTA}`);
})