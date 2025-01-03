/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3
    } else {
        return num1 + num2
    }

}
console.log(crazySum(50, 30))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(numIntero) {
    if ((numIntero >= 20 && numIntero <= 100) || numIntero === 400) { return true }
    else {
        return false
    }
}
console.log(boundary(400))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
let parolaChiave = "EPICODE"

function reverseString(string) {
    const arrayCaratteri = string.split("")
    const arrayInvertito = arrayCaratteri.reverse()
    const stringaInverita = arrayInvertito.join(" ")
    return stringaInverita
}
console.log(reverseString(parolaChiave))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

let testo = "italia francia"
let risultato = upperFirst(testo)

function upperFirst(stringa) {
    // dividi la stringa in parole 
    const words = stringa.split(" ")
    const upperwords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return upperwords.join(" ")
}
console.log(risultato)


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    const randomNumbers = []

    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 10)
        randomNumbers.push(randomNumber)
    }

    return randomNumbers
}

console.log(giveMeRandom(5))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const numInput = prompt("inserisci numero")
function crazyDiff(num) {
    const differenza = Math.abs(num - 19)
    if (differenza > 19) {
        return differenza * 3

    } else {
        return differenza
    }
}
const parsedInput = parseFloat(numInput)
const ris = crazyDiff(parsedInput)
    console.log("Il risultato è:" + ris)


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */