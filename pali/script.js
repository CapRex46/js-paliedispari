let parola =  prompt('inserisci la parola')
let parolaInversa = invertiParola(parola);

function invertiParola(word){
  var wordInversa = word.split('').reverse().join('');  
  return wordInversa;
}

if(parola == parolaInversa){
    document.write('la parola è palindroma');
  } else {
    document.write('la parola non è palindroma');
  }
  