/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}
const lunghezza1 = 4;
const lunghezza2 = 5;
const risultato = area(lunghezza1, lunghezza2);

console.log("AREA RETTANGOLO:", risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(numero1, numero2) {
  if (numero1 === numero2) {
    return (numero1 + numero2) * 3;
  } else {
    return numero1 + numero2;
  }
}
const ris1 = crazySum(2, 2);
console.log(ris1);
const ris2 = crazySum(2, 3);
console.log(ris2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
  const differenzaAssoluta = Math.abs(numero - 19);

  if (numero > 19) {
    return differenzaAssoluta * 3;
  } else {
    return differenzaAssoluta;
  }
}

const risultato1 = crazyDiff(25);
console.log(risultato1);
const risultato2 = crazyDiff(12);
console.log(risultato2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  return (n >= 20 && n <= 100) || n === 400;
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
{
  function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa;
    } else {
      return "EPICODE" + stringa;
    }
  }

  const risultato1 = epify("JavaScript");
  console.log("epify('JavaScript'):", risultato1);

  const risultato2 = epify("EPICODE");
  console.log("epify('EPICODE'):", risultato2);
}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

{
  function check3and7(numero) {
    if (numero > 0) {
      if (numero % 3 === 0 || numero % 7 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  let risultato = check3and7(14);
  console.log(risultato);
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}
const inversione = reverseString("EPICODE");
console.log("EPICODE --", inversione);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
