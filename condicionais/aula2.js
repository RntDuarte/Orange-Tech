

const precoEtanol = 5.79;
const precoGasolina = 6.66
const KmporLitros = 10;
const distanciaemKm = 100;
const combUsado = 'Gasolina';

const litrosconsumidos = distanciaemKm / KmporLitros;

if (combUsado === 'etanol') {
    const valorgasto = litrosconsumidos * precoEtanol;
    console.log(valorgasto.toFixed(2));

} else {
    const valorgasto = litrosconsumidos * precoGasolina;
    console.log(valorgasto.toFixed(2));

}




























