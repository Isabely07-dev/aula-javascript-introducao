function somar(a, b) {
    return a + b;
}

const somar = (a, b) => a + b;

console.log("Soma:", somar(10, 5));


console.log("Function arrow:" + somar(3, 4));

console.log(`Resultado de Função tradicional: ${result}`);

function ehPar(numero) {
return numero % 2 === 0
}
console.log(ehPar(5))

const ehParArrow = numero => numero % 2 == 0;

console.log(ehParArrow(6));


function tabuada(numero) {
    for (let i = 1; i <= 5; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

console.log("---------Calculadora------------");

function calculadora(n1, n2, operacao) {
   switch (operacao){
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    case '/': 
     return n2 != 0 ? n1 / n2 : "Erro: Divisão por zero!";
    default:
         return "Operação inválida";
   }
}

  console.log("10 + 5 =", calculadora(10, 5, '+'));
  console.log("10 - 5 =", calculadora(10, 5, '-'));
  console.log("10 / 0 =", calculadora(10, 5, '/'));
  console.log("10 * 5 =", calculadora(10, 5, '*'));



