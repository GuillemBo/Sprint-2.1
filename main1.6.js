//Block 1.6

//Nivell 1

//Exercici 1

const noms = ['Anna', 'Bernat', 'Clara'];

const nomsImpr = noms.forEach((element, i) => {console.log((i + 1) + ": " + element)})

// Exercici 2

for (let value of noms) {
    console.log(value)
}


//Exercici 3

let numeros = [1, 2, 3, 4, 5, 6];

let parells = numeros.filter(i => i % 2 == 0)

console.log(parells)


//Nivell 2

//Exercici 4

let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' }; 

for (const property in obj) {

    console.log(property + ": " + obj[property])
}

//Exercici 5

for (let value of numeros) {
    console.log(value)
    if (value == 5) break;

}

//Nivell 3

//Exercici 6

let index = 0
for (let value of noms) {
    console.log("Posicion: " + index, value)
    index++
}

