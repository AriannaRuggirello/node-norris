const http = require('http');
const dotenv = require("dotenv");
// importo utilities
const {loadJokes} = require('./utilities');
// deve essere eseguito prima di accedere alle variabili d'ambiente
dotenv.config();

const port = process.env.PORT || 8888;



// Creazione del server
const server = http.createServer((req, res) => {
// per richiamarla la callback function la passo come argomento

loadJokes((jokes)=>{
    const html=[];
        // return
    html.push('<ul>');
    // destructuring
    for (const joke of jokes) {
    
        html.push(`<li>${joke.value}</li>`);
    }
    html.push('</ul>');

    // risultato nel web
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(html.join(''));
});

 const html=[];
 return


 
// risultato nel web
res.setHeader('Content-Type','text/html;charset=utf-8');
res.end('hello wolrd');
});



// Avvio del server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

