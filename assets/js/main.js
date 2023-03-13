/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina */

//lista invitati
const class91 = [
    'adam.ben@gmail.com',
    'alessia.bertinato@gmail.com',
    'alexandro.fioretti@gmail.com',
    'andrea.ferrari@gmail.com',
    'blasi.mario@gmail.com',
    'carmelo.leone@gmail.com',
    'damiano.cosolari@gmail.com',
    'daniel.oddo@gmail.com',
    'daniel.morello@gmail.com',
    'domiziano.desantis@gmail.com',
    'donato.riccio@gmail.com',
    'edoardo.rizzo@gmail.com',
    'enrico.gian@gmail.com',
    'fabio.delli@gmail.com',
    'fabio.pacifici@gmail.com',
    'fabrizio.guariglia@gmail.com',
//siete troppi non metto tutti :)
];

// prendo la mail dell'utente
let emailUser;
const btnEl = document.querySelector('button')
btnEl.addEventListener('click', function() {

    emailUser = document.getElementById('email').value

    let guest = false;
    for( let i = 0; i < class91.length; i++ ) {
        if ( class91[i] === emailUser) {
            guest = true 
        }
    }

    if (guest) {
        alert('sei invitato')
    } else {
        alert('non sei invitato')
    }
    
});


/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */


const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber)
