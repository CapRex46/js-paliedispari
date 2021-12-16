let parola =  prompt('inserisci la parola')

let parolaInversa = invertiParola(parola);

const outputHtml = document.getElementById('results');

if(parola == parolaInversa){
    console.log('la parola è palindroma')
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}
