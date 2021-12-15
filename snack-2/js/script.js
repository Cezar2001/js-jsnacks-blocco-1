const userNumber = prompt('Inserisci un numero a piacere :) !!')

let x = userNumber;
let i = 1;
while (i <= userNumber) {
    i = Math.pow(x, 3);
    console.log(i);
    i++;
}

