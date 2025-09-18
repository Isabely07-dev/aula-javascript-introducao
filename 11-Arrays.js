let numeros = [10, 20, 30, 40, 50];

for(let i = 0; i < numeros.length; i++) {
    console.log(`Posição ${i}:`, numeros[i]);
}

let frutas = ["Maçã", "Banana", "Laranja"];

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

{
frutas.forEach(fruta => console.log("Fruta:", frutas));
}

{
    let nomes = ["Ana", "Bruno", "Carlos"];

    nomes.unshift("Diana");
    console.log(nomes);

}

{
    let carros = ["Ford", "Chevrolet", "Toyota"];

    carros.shift();
    console.log(carros);

    console.log(carros.indexOf("Toyota"));
}



{
    let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numeros_pares = numeros.filter(n => n % 2 === 0);
    console.log(numeros_pares);// [2, 4, 6, 8, 10]

    let quadrados = numeros.map(n => n * n);
    console.log(quadrados);// [1, 4, 9, 16, 25,..., 100]
}

{
    let cores = ["vermelho", "verde", "azul"];
    console.log(cores.includes("verde")); // true
    console.log(cores.includes("amarelo")); // false
}

{
    let frutas = ["Maçã", "Banana", "Laranja"];
    console.log(frutas.slice("0, 2")); // ["Maçã", "Banana"]
    

    let palavras = "JavaScript";
    console.log(palavras.slice(0, 4)); // "Java"

}

{
    let none = "Isa";
    console.log(none.toLocaleLowerCase()); // "isa"
    console.log(none.toLocaleUpperCase()); // "ISA"
}