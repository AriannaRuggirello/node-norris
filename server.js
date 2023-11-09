const http = require('http');
const dotenv = require("dotenv");

// deve essere eseguito prima di accedere alle variabili d'ambiente
dotenv.config();

const port = process.env.PORT || 8888;

// Creazione del server
const server = http.createServer((req, res) => {

    // Gestione delle richieste HTTP
    res.writeHead(200, {"Content-Type": "text/html",});
    res.end("Hello, world!");
});



// Avvio del server
server.listen(port, () => {
console.log(`Server running at
http://localhost:${port}/`);
});