//loop for - comparação

for(let i = 1; i <= 5; i++){
 console.log("Número:", i);
}

// Loop While - comparação

let contador = 1;
while (contador <= 3) {
    console.log("contador:",contador);
    contador++;
}

//Exemplo prático - tabuada

let numero = 7;
console.log (`=== Tabuada do ${numero} ===`);

for (let i = 1; i <=10; i++){
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}