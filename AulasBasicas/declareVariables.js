// - VAR é carregada no início do programa, podendo usa-la antes de inicializa-la
console.log(area0);
var altura0 = 5;
var comprimento0 = 7;
var area0 = altura0 * comprimento0;
console.log(area0);


// - LET só pode ser usada após inicializada
let altura1 = 5;
let comprimento1 = 7;
let area1 = altura1 * comprimento1;
console.log(area1);


// - CONST não é possível mudar o valor durante a execução do programa, precisa ser incializada com valor


// - Se não for declarado como é a variável, ela será incializada como VAR


//Converter tipo da variável
const numero = 456;
const numeroString = "456";
console.log(Number(numeroString) + numero); 
console.log(`${numeroString} + ${String(numero)}`);