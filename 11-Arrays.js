let numeros = [10, 20, 30, 40, 50];
for(let i = 0; i < numeros.length; i++) {
    console.log(`Posição ${i}:`, numeros[i]);
}



let frutas = ["Maçã", "Banana", "Laranja"];
for(let fruta of frutas) {
    console.log("Fruta:", fruta);
}   
frutas.forEach(fruta => {
    console.log("Fruta:", fruta);
});


{ 
console.log("Ana", "Bruno", "Carlos");

//adiciona no inicio
nomes.unhshift("Daniela");
console.log(nomes);
}

{
    let carros = ["Ford", "Chevrolet", "Toyota"];

    carros.shift();
    console.log(carros);

    console.log(carros.indexOf("Toyota"));
}

