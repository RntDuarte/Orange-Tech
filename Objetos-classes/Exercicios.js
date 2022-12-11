
/* 
1- Crie uma classe para representar carros.
Os carros possuem uma marca, cor e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos de o valor
gastos em reais para realizar esse percuso.
*/


class Carro {
    marca;
    cor;
    mediaCombKm;

    constructor(marca, cor, mediaCombKm) {
        this.marca = marca;
        this.cor = cor;
        this.mediaCombKm = mediaCombKm;
    }
    calculoDeViagem(distancia, precoComb) {
       return (distancia / this.mediaCombKm) * precoComb;
    }
};



const palio =  new Carro('fiat', 'Branco', 15);
console.log(palio.calculoDeViagem(200, 4).toFixed(2));










