/* 1 */

let insertWord = prompt('Inserisci una parola:');

let word = insertWord.toLowerCase();

/* 2 */

function isPalindrome(word){
    /* trasformo la stringa in un array */
    let splitWord = word.split("");
    /* inverto l'ordine delle lettere all'interno dell'array */
    let reverseArray = splitWord.reverse();
    /* trasformo l'array nuovamente in stringa */
    let reverseWord = reverseArray.join("");
    if (reverseWord == word){
        return `La parola '${word}' è palindroma`
    } else {
        return `La parola '${word}' non è palindroma`
    }
}

alert(isPalindrome(word));