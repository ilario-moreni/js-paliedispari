/* 1 */

let chooseEvenOrOdd = prompt('Inserisci 1 per dispari e 2 per pari');

if (chooseEvenOrOdd != '1' && chooseEvenOrOdd != '2' ){
    alert('Non hai inserito un valore valido')
}

/* 2 */

let chooseNum = prompt('Inserisci un numero da 1 a 5');

if (chooseNum < 1 || chooseNum > 5){
    alert('Non hai inserito un valore valido')
}

let playerNum = parseInt(chooseNum);
/* 3 */

let ranNum = Math.floor(Math.random()*5) + 1;

let computerNum = parseInt(ranNum);

console.log(`${computerNum}: numero random`)

/* 4 */

function isEvenOrOdd(playerNum, computerNum, chooseEvenOrOdd){
    let sum = playerNum + computerNum;
    /* controllo che la somma e la scelta (pari o dispari) siano pari */
    if (sum%2 == 0 && chooseEvenOrOdd%2 == 0){
        return "E' pari, hai vinto"
    }
    /* controllo che la somma e la scelta (pari o dispari) siano dispari */
     else if (sum%2 != 0 && chooseEvenOrOdd%2 != 0){
        return "E' dispari, hai vinto"
    } 
    /* 4.1 */
    else{
        return 'Questa volta hai perso'
    }
}

/* chiamo la funzione dentro un alert con le variabili da inserire come argomenti, in questo caso hanno lo stesso nome */
alert(isEvenOrOdd(playerNum, computerNum, chooseEvenOrOdd));