




const pessoa = {
    nome: 'Renato',
    idade: 31,

    descreva: function () {
        console.log('Meu nome é ' + this.nome + ' minha idade é ' + this.idade);
    }

};


pessoa['nome'] = 'teste';

pessoa.descreva();







