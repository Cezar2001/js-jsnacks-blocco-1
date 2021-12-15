const outPut = document.querySelector('.output');

let x = 2;
let potenza = 0; 
let output = "";

for(let i = 0; potenza < 512; i++) {
    potenza = x ** i;
    output = output + " " + potenza;
}

outPut.innerHTML = `${output}`;


// let x = 2;
// let y = 1000;
// let i = 0
// let potenza;

// while (potenza <= y) {
//     potenza = Math.pow(x, i);
//     console.log(potenza);
//     i++;
// }