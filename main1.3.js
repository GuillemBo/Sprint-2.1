//BLOCK 1.3

//Exercici 1 


function processar(nombre, myCallback) {

    myCallback(nombre)
}

// Exercici 2

function claculadora (num1, num2, callback) {

    callback(num1, num2)
}

function sumaNums(num1, num2) {
    let suma = num1 + num2
    console.log(`La suma de ${num1} i ${num2} es: ${suma}`)
}

claculadora(5, 2, sumaNums)


// Exercici 3 (nivell 2)

function esperarISaludar(nom, callback) {

    setTimeout(() => {callback(nom)}, 2000)

}

function saludar (nom) {
    console.log(`Hola ${nom}`)
}

esperarISaludar('guillem', saludar)


//Exercici 4 


function processarElements(myArray, callback) {
    
    for (let i = 0; i < myArray.length; i++) {
        callback(myArray[i])        
    }
}

function imprimirElement(element) {
    console.log(element)
}

const array = ["Hola", 5, "item"];

processarElements(array, imprimirElement)


//Exercici 5  (nivell 3)



function processarCadena(cadena, callback) {
     

    callback(cadena)

}

function imprCadenaMayus(cadena) {

    let upper = cadena.toUpperCase();
    console.log(upper)
}

processarCadena("hola mundo que pasa", imprCadenaMayus)