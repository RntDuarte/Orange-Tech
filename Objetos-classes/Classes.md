    # class
as classes sempre começa com letra
maiscula.
 Class são definaçoes de como objeto
tem q ser.
e uma instancia é uma ocorrencia, ou seja
a denifiçao de um carro é que ele tem
uma cor, marca, ano. Agora um carro 
branco de 2017 , ja se torna uma instancia
ja que foram atribuidos outras informa
coes.

class nome {};(como invocar)
ex: 
class pessoa {

    nome;
    idade;
    descrever() {
        console.log('Meu nome é ' + this.nome + ' minha idade é ' + this.idade);
    }
}

const Renato = new pessoa();
Renato.nome = 'Renato';
Renato.idade = 31;
Renato.descrever();

Terminal:
Meu nome é Renato minha idade é 31
--------------------------------------
constructor() {};
 Sempre q for estanciado tera q passar
pelo constructor.
 e este comando recebesse parametros. 

  


















