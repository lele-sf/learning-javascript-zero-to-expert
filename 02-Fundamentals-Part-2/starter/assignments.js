'use strict';

// Functions
function describeCountry(country,population,capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}
const finlandDescription = describeCountry('Finland',6,'Helsinki')
const canadaDescription = describeCountry('Canada',38.25,'Ottawa')
const irelandDescription = describeCountry('Ireland',5.033,'Dublin')

console.log(finlandDescription)
console.log(canadaDescription)
console.log(irelandDescription)

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    const percentage = (population / 7900) * 100
    return percentage.toFixed(1) + '%'
}

const finlandPopulation = percentageOfWorld1(6)
const canadaPopulation = percentageOfWorld1(38.25)
const irelandPopulation = percentageOfWorld1(5.033)

console.log(finlandPopulation)
console.log(canadaPopulation)
console.log(irelandPopulation)

const percentageOfWorld2 = function (population) {
    const percentage = (population / 7900) * 100
    return percentage.toFixed(1) + '%'
}
const chinaPopulation2 = percentageOfWorld2(1441)
const canadaPopulation2 = percentageOfWorld2(38.25)
const irelandPopulation2 = percentageOfWorld2(5.033)

console.log(chinaPopulation2)
console.log(canadaPopulation2)
console.log(irelandPopulation2)

// Arrow Functions
const percentageOfWorld3 = (population) => {
    const percentage = (population / 7900) * 100
    return percentage.toFixed(1) + '%'
}

const finlandPopulation3 = percentageOfWorld3(6)
const canadaPopulation3 = percentageOfWorld3(38.25)
const irelandPopulation3 = percentageOfWorld3(5.033)

console.log(finlandPopulation3)
console.log(canadaPopulation3)
console.log(irelandPopulation3)

// Functions Calling Other Functions
const describePopulation = (country,population) => {
    const percentCountry = percentageOfWorld1(population)
    return `${country} has ${population} million people, which is about ${percentCountry} of the world.`
}
console.log(describePopulation('China',1441))

//// Coding Challenge #5 ////
const calcAverage = (firstScore,secondScore,thirdScore) => {
    return (firstScore + secondScore + thirdScore) / 3
} 

let scoreDolphins = calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49)

const checkWinner = (avgDolphins,avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins...')
    }
}

checkWinner(scoreDolphins,scoreKoalas)

scoreDolphins = calcAverage(85,54,41)
scoreKoalas = calcAverage(23,34,27)

checkWinner(scoreDolphins,scoreKoalas)

//// Introduction to Arrays ////
const populations = [6,1441,38.25,5.033]

const has4Elements = populations.length === 4 ? true : false
console.log(has4Elements)

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]
console.log(percentages)

//// Coding Challenge #6 ////
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const bills = [125,555,44]
const tips = [
        calcTip(bills[0]),
        calcTip(bills[1]),
        calcTip(bills[2])
    ]
const totals = [
        bills[0] + tips[0],
        bills[1] + tips[1],
        bills[2] + tips[2]
    ]

console.log(totals)

//// Basic Array Operations (Methods) ////
const neighbours = ['Uruguai', 'Argentina', 'Paraguai', 'Bolívia', 'Peru', 'Colômbia', 'Venezuela', 'Guiana', 'Suriname', 'Guiana Francesa']

neighbours.push('Utopia')
neighbours.pop()

const notIncludeGermany = !neighbours.includes('Germany')

if (notIncludeGermany) {
    console.log('Probably not a central European country :D')
}

console.log(neighbours.indexOf('Argentina'))
neighbours[1] = 'ArGeNTiNa'

console.log(neighbours)

//// Introduction to Objects ////
const myCountry = {
    country: 'Canada',
    capital: 'Ottawa',
    language: 'english',
    population: 38.25,
    neighbours: ['Alaska','United States']
}

//// Dot vs. Bracket Notation ////
console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking-people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}.`)
myCountry.population += 2
myCountry['population'] -= 2
console.log(myCountry.population)

//// Object Methods ////
myCountry['describe'] = function() {
    console.log(`${this.country} has ${this.population} milion ${this.language}-speaking-people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}!`)
}
myCountry.describe()
myCountry['checkIsland'] = function() {
    this.isIsland = this.neighbours.length === 0 ? true : false
}
myCountry.checkIsland()
console.log(myCountry)

//// Coding Challenge #7 ////
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}
mark.calcBMI()
john.calcBMI()

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if(john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

//// Iteration: The for Loop ////
for(let voter = 1; voter <= 20; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}

//// Looping Arrays, Breaking and Continuing ////
// const populations = [6,1441,38.25,5.033] - already declared
const percentages2 = []

for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]))
}
console.log(percentages2)

//// Looping Backwards and Loops in Loops ////
const listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
]
for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}

//// The while Loop ////
// const populations = [6,1441,38.25,5.033] - already declared
const percentages3 = []
let j = 0
while(j < populations.length) {
    percentages3.push(percentageOfWorld1(populations[j]))
    j++
}
console.log(percentages3)

//// Coding Challenge #8 ////
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips2 = []
const totals2 = []

for(let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]))
    totals2.push(bills2[i]+tips2[i])
}

console.log(tips2)
console.log(totals2)

const calcAverage2 = (arr) => {
    let sum = 0
    for(let v = 0; v < arr.length; v++) {
        sum += arr[v]
    }
    return sum / arr.length
}
console.log(calcAverage2([2, 3, 7]))
console.log(calcAverage2(totals2))
console.log(calcAverage2(tips2))