//BLOCK 1.1


// Exercici 1
let add = (a, b) => {return a + b};

// Exercici 2
let randomNumber = () => Math.floor(Math.random() * 101)


// Exercici 3
class Person {
    constructor (name) {
        this._name = name
    }

    get name () {
        return this._name
    }

    greet = () => {console.log(`Hola ${this.name}`)}
        
}

console.log(randomNumber())

const persona = new Person('Ivan')

console.log(persona)

persona.greet()

// Exercici 4 (nivell 2)



let printNumbers = () => {
    
    const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let i = 0; i < arrayNumbers.length; i++) {  console.log(arrayNumbers[i])  } }

printNumbers()

// Exercici 5 (nivell 3)


setTimeout(() => {console.log("Tengo delay de 3 segundos.");}, 3000);
