//// Values and Variables ////
const country = 'Brazil';
const continent = 'South America';
let population = 214_400_222;

console.log(country)
console.log(continent)
console.log(population)

//// Data Types ////
const isIsland = false;
let language;

console.log(typeof(isIsland))
console.log(typeof(population))
console.log(typeof(country))
console.log(typeof(language))

//// let, const and var ////
language = 'Portuguese'

//// Basic Operators ////
const halfPopulation = population / 2
console.log(halfPopulation + ' million people in each half')

population++
console.log(population)

populationFinland = 6_000_000
console.log(population > populationFinland)

averagePopulation = 33_000_000
console.log(population < averagePopulation)

const description = `${country} is in ${continent}, and its ${population} milion people speak ${language}.`
console.log(description)

//// Coding Challenge #1 ////
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log('Mark: ' + BMIMark,'John: ' + BMIJohn);

//// Coding Challenge #2 ////
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

//// Taking Decisions: if / else Statements ////
const populationMinusAverage = averagePopulation - population
if (population > averagePopulation) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${populationMinusAverage} below average.`)
}

//// Type Conversion and Coercion ////
console.log('9' - '5') // 4
console.log('19' - '13' + '17') // '617'
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

//// Equality Operators: == vs. === ////
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }

//// Logical Operators ////
if (language === 'english' && population < 50_000_000 && !isIsland) {
    console.log(`You should live in ${country} :)`);
 } else {
    console.log(`${country} does not meet your criteria :(`);
}

//// Coding Challenge #3 ////
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")
} else {
    console.log("Both win the trophy")
}

//// The switch Statement ////
switch(language) {
    case 'chinese':
    case 'mandarim':
        console.log('MOST number of native speakers!')
    break
    case 'spanish':
        console.log('2nd place in number of native speakers')
    break
    case 'english':
        console.log('3rd place')
    break
    case 'hindi':
        console.log('Number 4')
    break
    case 'arabic':
        console.log('5th most spoken language')
    break
    default:
        console.log('Great language too :D')
}

//// The Conditional (Ternary) Operator ////
console.log(`${country}'s population is ${population > averagePopulation ?'above':'below'} average.`)

//// Coding Challenge #4 //// 
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)