/* *****************************************************************
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in francescaconsole.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
********************************************************************/


/* INIZIO SBAGLIATO */
/*******************************

// 1° - chiedere all'utente il n° di km e l'età
const kms = Number(prompt('Quanti km devi percorrere?'));
const travelerAge = Number(prompt('Quanti anni hai?'));
console.log(kms, travelerAge);

// 2° - calcolo dei prezzi e degli sconti
const priceEl = document.getElementById('price');
const priceKm = 0.21;
let ticketPrice = kms * priceKm;
console.log(priceKm, ticketPrice);

// 2.a - sconto del 20% per minorenni
if (travelerAge < 18) {
    discount = 0.2;
    // 2.b - sconto del 40% per over65
} else if (travelerAge < 65) {
    // 2.c - nessuno sconto
    discount = 0.4;
} else {
    discount = 0;
}

// 2.d - calcolo prezzo scontato
const discountAmount = ticketPrice * discount;
ticketPrice = ticketPrice - discountAmount;
console.log(discountAmount);

// 2.e - correzione se non inseriscono numeri e arrotondamento a 2 decimali del prezzo
if (isNaN(ticketPrice)) {
    alert('Attenzione! Inserisci un valore numerico per i km da percorre.');
    priceEl.innerHTML = `Ops! c'é stato un problema! Riprova.`;

} else {
    priceEl.innerHTML = `€ ${ticketPrice.toFixed(2)}`;
} 

*******************************/

/* RESTART */

//2° - pesca le variabili dagli input
const travelerName = document.getElementById('name');
const travelKms = document.getElementById('kms');
const travelerAge = document.getElementById('age');
console.log(travelerName, travelKms, travelerAge);

const btngenerator = document.getElementById ('genera');
console.log(btngenerator);

//1° - attiva evento click

btngenerator.addEventListener ('click', function(){
    console.log('hai cliccato il pulsante');
})
