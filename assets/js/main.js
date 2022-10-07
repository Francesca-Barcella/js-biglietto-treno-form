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

//1° - pesca le variabili dagli input
const travelerNameInput = document.getElementById('name');
const travelKmsInput = document.getElementById('kms');
const under18Input = document.getElementById('under18');
const over65Input = document.getElementById('over65');
const travelerAgeInput = document.getElementById('age');

/* console.log('eta del viaggiatore minorenne', under18Input);
console.log('eta del viaggiatore over65', over65Input);
console.log('eta del viaggiatore', travelerAgeInput);
console.log('travelKmsInput', travelKmsInput); */

const btngenerator = document.getElementById('genera');
const priceKm = 0.21;

//2° - attiva evento click
btngenerator.addEventListener('click', function () {
    console.log('hai cliccato il pulsante');

    const travelerName = travelerNameInput.value;
    console.log('traveler Name value', travelerNameInput.value);

    const travelKms = travelKmsInput.value;
    console.log('travel Kms value', travelKmsInput.value);

    const travelerAge = travelerAgeInput.value;
    console.log('traveler Age value', travelerAgeInput.value);

    document.getElementById('ticket_name').innerHTML = travelerName;

    // discount none
    const discountNone = travelKmsInput.value * priceKm;
    console.log('il prezzo totale dei km è:', discountNone);

    // discount 20%
    const less20 = discountNone * 20 / 100;
    const discount20 = (discountNone - less20).toFixed(2);
    console.log('il prezzo totale per i minorenni è:', discount20);

    // discount 40%
    const less40 = discountNone * 40 / 100;
    const discount40 = (discountNone - less40).toFixed(2);
    console.log('il prezzo totale per gli over65 è:', discount40);

    // definizione fasce età
    if (under18Input == Minorenne) {
        /*   document.getElementById('under18').innerHTML='Sconto per minorenni'; */
        console.log('sei minorenne');

    }


    //offerta


    // numero carrozza
    document.getElementById('ticket_position').innerHTML = Math.floor((Math.random() * 10) + 1);

    //Codice cp
    document.getElementById('ticket_code').innerHTML = Math.floor((Math.random() * 10000) + 1);

    // prezzo biglietto
    
})




