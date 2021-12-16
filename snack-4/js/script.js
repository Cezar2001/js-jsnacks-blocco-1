let userStringNumber;

do {
    userStringNumber = prompt('Inserisci un numero di almeno 4 cifre.');
} while(userStringNumber.length < 4 || userStringNumber.length > 4);

// let sum = parseInt(userStringNumber[0]) + parseInt(userStringNumber[1]) +  parseInt(userStringNumber[2]) +  parseInt(userStringNumber[3]);

let sum = 0;

for(let i = 0; i < userStringNumber.length; i++) {
    sum += parseInt(userStringNumber[i]); 
}

console.log(sum);