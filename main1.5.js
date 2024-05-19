// BLock 1.5

// nivell 1

//Exercici 1

const arrNums = [1, 2, 3, 4]

const resultElevat = arrNums.map(i => i ** 2)

console.log(resultElevat)


//Exercici 2

const numerosPares = arrNums.filter(i => i % 2 == 0)

console.log(numerosPares)

//Exercici 3

const arrNums2 = [1, 10, 8, 11]

const resultat = arrNums2.find(i => i > 10)

console.log(resultat)

//Exercici 4

const arrNums3 = [13, 7, 8, 21]

const sumaArr = arrNums3.reduce((acumulador, i) => acumulador + i)

console.log(sumaArr)


//Nivell 2

//Exercici 5


const array = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

let multitask = (myArray) => {filt = myArray.filter(i => i >= 10), mult = filt.map(i => i * 2), sum = mult.reduce((acumulador, i) => acumulador + i); return console.log(sum)}

multitask(array)


// Nivell 3

// Exercici 6

const array2 = [11, 12, 13, 14];

const algunMajor = array2.some(i => i > 10)

const totsMajors = array2.every(i => i > 10)

console.log(algunMajor)
console.log(totsMajors)