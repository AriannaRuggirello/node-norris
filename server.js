const http = require("http");
const { sum, loadStringNorris, loadAjaxgNorris } = require("./utilities.js");

// Imposto la porta e l'host per il server
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// Definisco l'URL dell'API delle barzellette su Chuck Norris
const chuckNorrisApiUrl = "https://api.chucknorris.io/jokes/random";

// Carico le variabili d'ambiente da un file .env
require('dotenv').config();

// Importo il modulo fs per la gestione dei file
const fs = require('fs');

// Creo il server HTTP
http.createServer(function (req, res) {
    // Imposto l'header per il tipo di contenuto della risposta
    res.setHeader("Content-Type", "text/html;charset=utf-8");

    // Eseguo una richiesta alla Chuck Norris API per ottenere una barzelletta
    fetch(chuckNorrisApiUrl)
        .then(response => response.json())
        .then(data => {
            // Stampo la barzelletta nel formato HTML
            res.end(`<h1>${data.value}</h1>`);

            // Aggiungo la barzelletta al file norris.json
            const jsonToAdd = JSON.stringify(data.value);

            // Scrivo nel file
            fs.appendFile("norris.json", jsonToAdd, function (err) {
                if (err) throw err;
                console.log("ok!");
            });
        });

}).listen(port, host, () => {
    // Mostro un messaggio di avvio del server
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
});
