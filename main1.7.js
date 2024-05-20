//Block 1.7

//Nivell 1

//Exercici 1



const myPromise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Hola, mon!");
    }, 2000);

})


//exercici 2


const myPromise2 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Hola, mon!");
    }, 2000);

})

myPromise2.then(message => console.log(message))


//Exercici 3

let input = "Hola"

const promesa = new Promise((resolve, reject) => {

    if (input != "Hola"){
        reject(new Error("Input is diferent"))
    }

    setTimeout(() => {
        resolve(input)
    }, 2000);
})

promesa.then(() => console.log("Promise solved"))


//Exercici 4

async function funcioAsincrona() {

    try {
        const resultat = await myPromise
        console.log(resultat)
    } catch (error) {
        console.error("Hi ha hagut un error", error)
    }
}

funcioAsincrona()



//Nivell 2

//Exercici 5


// const promesa1 = new Promise((resolve, reject) => {

// })