
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
    return numero1/ numero2

};



const requestNumber = () =>  {
    let numero1, numero2;
    
    
    do {
        numero1 = prompt("Introduce el primer número:");
        if (isNaN(numero1) || numero1 === null || numero1.trim() === "") {
            alert("Por favor, introduce un número válido.");
        } else {
            numero1 = parseFloat(numero1);
        }
    } while (isNaN(numero1));

    do {
        numero2 = prompt("Introduce el segundo número:");
        if (isNaN(numero2) || numero2 === null || numero2.trim() === "") {
            alert("Por favor, introduce un número válido.");
        } else {
            numero2 = parseFloat(numero2);
        }
    } while (isNaN(numero2));

}


const selectOperation = (operacion) => {
    switch (operacion){
        case 1 : plus()
    }


};

const main = () => {

}

main();
