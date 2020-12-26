function esPar(numero) {
    if (numero === 0) {
        return console.log('Debes ingresar un numero distincto');
    }
    return numero % 2 === 0 ? console.log("El numero es par") : console.log("El numero es impar");
}

esPar(0);
esPar(60);