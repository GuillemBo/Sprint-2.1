//BLOCK 1.2


// Exercici 1

let potConduir = (edad) => {edad >= 18 ? console.log("Pots conduir") : console.log("No pots conduir")}

potConduir(15)
potConduir(19)

// Exercici 2

let num1 = 15
let num2 = 20

num1 > num2 ? console.log(`El numero ${num1} es mes gran`) : console.log(`El numero ${num2} es mes gran`)

//Exercici 3 (Nivell 2)

function numTipus(num) {

    num > 0 ? console.log("El numero es positiu")
    : num < 0 
    ? console.log("El numero es negatiu")
    : console.log("El numero es zero")
}

numTipus(5)
numTipus(-2)
numTipus(0)


function trobarMaxim(a, b, c) {

    a > b && a > c 
        ? console.log(`${a} es el valor màxim`)
        : b > a && b > c 
            ? console.log(`${b} es el valor màxim`)
            : console.log(`${c} es el valor màxim`)
}

trobarMaxim(6, 4, 3)
trobarMaxim(6, 7, 3)
trobarMaxim(6, 7, 10)

//Exercici 4 (Nivell 3)


let parOImpar = () => {

    const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let i = 0; i < arrayNum.length; i++){
        arrayNum[i] % 2 == 0 
            ? console.log(`El numero ${arrayNum[i]} es parell`)
            : console.log(`El numero ${arrayNum[i]} es imparell`)
    }
}

parOImpar()