
class pessoa {

    nome;
    idade;
    AnoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.AnoDeNascimento = 2022 - idade;

    }
    descrever() {
        console.log('Meu nome é ' + this.nome + 'e minha idade é ' + this.idade);
    }
};

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + ' É mais velho que ' + p2.nome);
    }
    else if (p2.idade > p1.idade) {
        console.log(p2.nome + ' É mais velho que ' + p1.nome);
    }
    else {
        console.log(' Ambos tem a mesma idade ');
    }
}

const Renato = new pessoa(' Renato ', 35);
const Leticia = new pessoa(' Leticia ', 35);


compararPessoas(Renato, Leticia);


