
const Nota1 = 7;
const Nota2 = 7;
const Nota3 = 8;
const Media = (Nota1 + Nota2 + Nota3) / 3;

console.log(Media.toFixed(2));

if (Media < 5) {
    console.log('Reprovacao');
    
} else if (Media >= 5 && Media <= 7) {
    console.log('Recuperaçao');
   
} else { 
    console.log('Aprovado');
    
}
    












