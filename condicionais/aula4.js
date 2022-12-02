


const IMC = 87 / (1.74 * 1.74);

console.log(IMC.toFixed(2));



if (IMC <= 18.5) {
    console.log('Abaixo do peso');
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log('Peso Normal');
} else if (IMC >= 25 && IMC <= 30) {
     console.log("Acima do Peso");
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Obeso');
} else {IMC > 40
    console.log('Obesidade Grave');
}






