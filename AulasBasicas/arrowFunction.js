const apresentar = nome => {
    console.log(`Seu nome é ${nome}!`);
};

apresentar("Rodrigo");

const somar = (n1, n2) => n1 + n2;

console.log(somar(1, 2));

const dividir = (n1, n2) => {
    if (n2 == 0) {
        return "Impossível divdir por 0";
    } else {
        return n1 / n2;
    }
}

console.log(dividir(1, 2));
console.log(dividir(1, 0));