
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
    return numero1/ numero2;

};


const requestNumber = (promptText) => {
    let num;
    do {
        num = parseFloat(prompt(promptText));
    } while (isNaN(num));
    return num;
};

const selectOperation = (promptText) => {
    let num;
    do {
        num = parseFloat(prompt(promptText));
    } while (isNaN(num));
    return num;
};



const main = () => {
    let numero1 = requestNumber("Ingrese un numero:");

    let numero2 = requestNumber("Ingrese otro numero: ");

    let operacion = selectOperation("Ingrese la operacion que desea realizar:\n 1.Sumar \n 2.Restar\n 3.Multiplicar\n 4.Dividir");
    
    let resultado;

    switch(operacion) {
        case 1: 
            alert("El resultado es: " + plus(numero1, numero2));
            break;
        case 2: 
            alert("El resultado es: " + subtract(numero1, numero2));
            break;
        case 3:
            alert("El resultado es: " + multiply(numero1,numero2));
            break;
        case 4:
            if (numero2 === 0){
                alert("Error division por cero!");
                return;
            }
            alert("El resultado es: " + split(numero1, numero2));
            break;
    }
}

main();
