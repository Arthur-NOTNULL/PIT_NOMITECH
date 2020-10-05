const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

const PORTA = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/**", async (req, res, next) => {
    if (req.statusCode == 404) res.json({aviso:"página não encontrada"})
    if (req.statusCode == 500) req.json({aviso: "erro do servidor"})
    next();
});

app.use(routes);

app.listen(PORTA, () => {
    console.log(`O pai tá on na porta ${PORTA}`);
})