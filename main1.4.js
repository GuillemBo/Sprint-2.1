// Block 1.4: Rest & Spread operators

// Exercici 1

const array1 = ["hola", "Soc", "l'array1"];
const array2 = ["i", "jo", "l'array2"];

const arrayJunts = [...array1, ...array2]

console.log(arrayJunts)

// Excercici 2

function suma (...rest) {

    let total = 0
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }

    console.log(total)
}

suma(1, 2, 3, 4)



//Exercici 3 (nivell 2)

const obj1 = {
    Nom: "carlos",
    Edat: 42,
    Hobbies: "Programar",
    };

const obj2 = {...obj1}

obj2.Nom = "Juan"
console.log(obj1)
console.log(obj2)


// Exercici 4 

const arrayElements = [5, 10, "quinze", "vint", "trenta", "trentacinc"]

const [element1, element2, ...rest] = arrayElements

console.log(element1);
console.log(element2);

console.log(rest)

//Exercici 5 (nivell 3)


function suma(x, y, z) {
    return x + y + z

}

const arr = [1, 2, 3]

console.log(suma(...arr))


// Exercici 6


const persona = {Nom: "Manel", Edat: 24}

const propiedad = {guitarra: "elèctrica", cotxe: "toyota"}

const fusio = {...persona, ...propiedad}

console.log(persona)
console.log(propiedad)
console.log(fusio)