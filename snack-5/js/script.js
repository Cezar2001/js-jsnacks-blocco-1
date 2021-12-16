let listNumber = [];
let sum = 0;

do{
    let userNumber = parseInt(prompt('Inserisci un numero'));
    listNumber.push(userNumber);
    sum += userNumber;
    console.log(userNumber);
    console.log(listNumber);
} while(sum < 50);

console.log(sum);