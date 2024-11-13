// Dati noti
const prezzoKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;


// Richiesta all'utente di km da percorrere ed età
const kmTot = prompt('Inserire Km da percorrere');
console.log ('km tot=', kmTot)
let prezzoBiglietto = prezzoKm * kmTot; 
let etàPasseggero = prompt('Inserire Età');
console.log ('età=',etàPasseggero)

// Applicazione sconti
// if (etàPasseggero < 18) {
//   prezzoBiglietto *= 0.8
// } else if  (etàPasseggero > 65) {
//   prezzoBiglietto *= 0.6
// }

if (etàPasseggero < 18) {
  prezzoBiglietto *= (1 - scontoMinorenni / 100);
} else if  (etàPasseggero > 65) {
  prezzoBiglietto *= (1 - scontoOver65 / 100);
}

// Output prezzo finale
prezzoBiglietto = prezzoBiglietto.toFixed(2);
let totale = alert(`Il suo totale è: €${prezzoBiglietto}`)



