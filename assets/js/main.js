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

    //controllo se la mail messa dall'utente è nella mia lista mettendo prima un valore booleano "flase" per poi cambiarlo in "true" nel caso il ciclo for lo tovi nell'array
    let isGuest = false;
    for( let i = 0; i < class91.length; i++ ) {
        if ( class91[i] === emailUser) {
            isGuest = true 
        }
    }


    //se il valore di isGuest è cambiato in "true" allora dirò all'utente che è stato invitato altrimenti gli dirò di no
    if (isGuest) {
        alert('sei invitato')

        /* 
            SECONDO ESERCIZIO
            Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. 
        */
        const pcNumber = Math.floor(Math.random() * 6) + 1;
        const userNumber = Math.floor(Math.random() * 6) + 1;
        const playingDice = document.querySelector('button');
        playingDice.insertAdjacentHTML('afterend', `<h2>Numero del PC: ${pcNumber}</h2><h2>Numero tuo: ${userNumber}</h2>`)
        if (userNumber > pcNumber) {
            alert('hai vinto')
        } else if (userNumber < pcNumber) {
            alert('hai perso')
        } else {
            alert('pareggio')
        }

    } else {
        alert('non sei invitato')
    }
    
});