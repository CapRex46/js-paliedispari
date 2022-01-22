
function randomNumber(minNum, maxNum) {
    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result
}

function isPari(num){
    return num % 2 === 0;
}

const user = prompt('scegli pari o dispari');
const usernum = parseInt((prompt('1 a 5')));
const machineNumber = randomNumber(1,5);
const total = usernum + machineNumber;

// if(isPari(total) && usernum === 'pari') {
//     console.log('hai vinto');
// }else if (isPari(total) && usernum !== 'pari') {
//     console.log('hai perso');
// }else if (isPari(total) && usernum === 'dispari') {
//     console.log('hai vinto');
// }else {
//     console.log('hai perso');
// }

function userWin(totalNumber, userSelection) {
   return (isPari(totalNumber) && usernum !== 'pari') || (isPari(totalNumber) && usernum === 'dispari')
}

if (userWin (total, usernum)) {
    console.log ('hai vinto');
} else {
    console.log('hai perso');
}