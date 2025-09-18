let numeros = [10, 20, 30, 40, 50];

for(let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i}:`, numeros[i]);
}

let frutas = ["Maçã", "Banana", "Laranja"];

for(let fruta of frutas) {
    console.log("Fruta:", fruta);
}   

frutas.forEach(fruta =>{
    console.log("fruta:", fruta);
});
