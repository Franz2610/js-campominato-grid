/**
 * Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento
difficoltà 1 => 100 caselle
difficoltà 2 => 81 caselle
difficoltà 3 => 49 caselle
*/


// Prendiamo dal nostro html il form con una const
const levelForm = document.getElementById('levelForm');

// Creiamo un evento al invio 
levelForm.addEventListener('submit', play);


//funzione per creare la cella
function drawSquare(index, numSquares) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${numSquares})`;
    square.style.height = square.style.width;
    square.innerHTML = index;
    return square;
}

//Creiamo la funzione play 

function play(e) {
    e.preventDefault();
    const playground = document.getElementById('playground');
    playground.innerHTML = '';

    // Basta prendersi solo il valore
    const level = document.getElementById('level').value;
    console.log(level);

    // creare una variabile per le celle
    let squareNumbers;

    switch (level) {
        case 'facile': 
            squareNumbers = 100;
            break;
        case 'medio': 
            squareNumbers = 81;
            break;
        case 'difficile': 
            squareNumbers = 49;
            break; 
    }
    console.log(squareNumbers);
    
    // Determino il numero di celle per lato
    let squareperRow = Math.sqrt(squareNumbers);
    console.log(squareperRow);


    // per il numero di celle genero la cella
    for(let i=1 ; i <= squareNumbers; i++){
        const square = drawSquare(i, squareperRow);

        square.addEventListener('click', function () {
            square.classList.add('safe');
        });
        playground.appendChild(square);
    }
}

