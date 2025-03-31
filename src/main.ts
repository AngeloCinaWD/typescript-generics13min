import './style.css';
// import { setupCounter } from './counter.ts';
// import { Saluto } from './model/saluto.ts';

// const saluto: Saluto = {
//   saluto: 'ciao',
// };

const numbers: Number[] = [1, 2, 3];
// pur non passando il type in fase di dichiarazione, la const sarà di tipo Number per inference di ts
const firstNum = getFirstElement(numbers);

// creo un array di stringhe
const strings = ['abc', 'def'];
// se lo passo alla funzione getFirstElement() ho un errore da ts che mi avverte che la funzione invocata accetta un array di numeri
// per risovere questo problema riscrivo la funzione utilizzando una generica di ts
const firstString = getFirstElement(strings);

// ho una funzione che accetta come argomento un array di Number
// function getFirstElement(array: Number[]) {
//   return array[0];
// }
// per poter passare un array di qualsiasi tipo, non solo number, utilizzo le generiche di ts
// in questo modo il tipo dell'argomento che passo sarà assegnato anche al return
// per definire una generica ho bisogno di <tipo> subito dopo il nome della funzione
// il tipo generico T viene sostituito da ts con il type di quello che sto passando come argomento
// se gli passo un array di Number (Number[]) T sarà Number
// quindi la funzione ritorna un qualcosa di tipo T
function getFirstElement<T>(array: T[]): T {
  return array[0];
}

// le generiche vengono utilizzate ovunque ho bisogno di fare in modo che l'argomento che entra ed il return di una funzione siano uguali
// ad esempio al metodo .querySelector() gli sto dicendo: l'elemento html che selezioni è un HTMLDivElement, quindi dammi tutte le proprietà o metodi possibili che questo elemento porta con se
// se indicassi un HTMLInputElement avrei disponibile anche la property value, non disponibile per un div
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="prova">
    <div>${firstNum}</div>
    <div>${firstString}</div>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
