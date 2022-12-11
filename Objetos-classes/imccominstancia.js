

class pessoa {
    nome;
    altura;
    peso;

    calculoimc() {
        console.log(this.peso / Math.pow(this.altura, 2))
      
    }

};


const Renato = new pessoa;
Renato.nome = 'Renato';
Renato.peso = 84;
Renato.altura = 1.74;

Renato.calculoimc();












