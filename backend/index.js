const server = require("./src/server");
require('dotenv/config');

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
