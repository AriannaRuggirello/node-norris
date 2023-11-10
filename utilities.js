
function sum(num1, num2){
    // Restituisco la somma dei due numeri
    return num1 + num2;
}

// Importo i moduli necessari
const fs = require('fs');
const path = require("path");

// Funzione per caricare le barzellette su Chuck Norris da un file JSON locale
function loadStringNorris(){

    // Definisco il percorso del file JSON locale
    const pathData = path.join(__dirname, "norris.json");

    // Leggo il file in modo sincrono
    try {
        // Leggo il contenuto del file come stringa
        const norrisString = fs.readFileSync(pathData, "utf-8");

        // Converto la stringa in un array di oggetti
        return JSON.parse(norrisString);
    } catch (err) {
        // Gestisco gli errori, se presenti, durante la lettura del file
        console.log(err.message);

        // Restituisco un array vuoto in caso di errore
        return [];
    }
}

// Funzione per caricare le barzellette su Chuck Norris da un'API esterna tramite Ajax
function loadAjaxgNorris(){
    // Definisco l'URL dell'API delle barzellette su Chuck Norris
    const url = "https://api.chucknorris.io/jokes/random";

    // Effettuo una richiesta fetch all'API
    fetch(url)
        .then(response => response.json())
        .then((data) => 
            // Estraggo e restituisco il valore della barzelletta dalla risposta dell'API
            data.value
        );
}

// Esporto le funzioni come parte del modulo
module.exports = {
    sum,
    loadStringNorris,
    loadAjaxgNorris
};
