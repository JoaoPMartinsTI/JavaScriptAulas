//Declaração de Função
function imprimeTexto(texto) {
    console.log(texto);
}

let texto = "A conquista do poder vem da força e da diplomacia!";

imprimeTexto(texto);


function retornarValorSoma(a, b) {
    return a + b;
}

console.log(retornarValorSoma(1, 2));

function multiplicacao(a, b) {
    return `O produto de ${a} e ${b} é ${a * b}`;
}

console.log(multiplicacao(retornarValorSoma(2, 3), 5 * 5));