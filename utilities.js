const fetch = require("node-fetch").default;

/**
 * 
 * @param {function} onSuccess 
 */
// per stampare i dati abbiamo bisogno di una callback :onSucces in questo caso
function loadJokes(onSuccess){
const url = 'https://api.chucknorris.io/jokes/random';


fetch(url)
// decodifica il codice .json ritornano una promise quindi bisogna agg then in modo da ascoltare la risposta anche la risposta response.json()
.then((response)=>response.json())
.then((data)=>{
   console.log(data);
   onSuccess(data);

});
    
}





// esporto
module.exports = {
    loadJokes
};