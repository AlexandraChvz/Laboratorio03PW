
const plus = (numero1, numero2) => {
    return numero1 + numero2;
};
const subtract = (numero1, numero2) =>{
    return numero1 - numero2;

} ;
const multiply = (numero1, numero2) =>{
    return numero1 * numero2;

} ;
const split = (numero1, numero2) => {

};

const requestNumber = (mensaje) => {
    let numero;
    do {
        numero = prompt(mensaje)
    }
    
};

const selectOperation = () => {
    let operacion;
    const opciones = ['sumar', 'restar', 'multiplicar', 'dividir'];
    do{
        operacion = prompt("Elige una operacion ")
    }while(!opciones)

};

const main = () => {

}

main();
