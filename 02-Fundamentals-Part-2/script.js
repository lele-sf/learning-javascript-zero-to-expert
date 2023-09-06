'use strict'; // Eliminates some JavaScript silent errors by changing them to throw errors.

//// Activating Strict Mode ////
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'; - strict mode reserved word
// const private = 534; - strict mode reserved word
 
//// Functions ////
function logger() {
    console.log('My name is Jonas')
}
  
// calling / running / invoking function
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples,oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

// console.log(fruitProcessor(5,0)) or:
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

//// Function Declarations vs. Expressions ////

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}
const age1 = calcAge1(1991)
  
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991)

console.log(age1, age2)

//// Arrow functions ////
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    // return retirement
    return `${firstName} retires in ${retirement} years`
}
  
console.log(yearsUntilRetirement(1991, 'Jonas')) 
console.log(yearsUntilRetirement(1980, 'Bob'))

//// Functions Calling Other Functions ////
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice
}
console.log(fruitProcessor(2, 3))

//// Introduction to Arrays ////
const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const y = new Array(1991, 1984, 2008, 2020)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)
// friends = ['Bob', 'Alice']

const firstName = 'Jonas'
const jonasArray = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonasArray)
console.log(jonasArray.length)

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018]

const ageOne = calcAge(years[0])
const ageTwo = calcAge(years[1])
const ageThree = calcAge(years[years.length - 1])
console.log(ageOne, ageTwo, ageThree)

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])]
console.log(ages)

//// Basic Array Operations (Methods) ////
//const friends = ['Michael', 'Steven', 'Peter'] - já declarado

// Add elements
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

// Remove elements
friends.pop() // Last
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift() // First
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven')
}

//// Introduction to Objects ////
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

//// Dot vs. Bracket Notation ////
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// console.log(jonas.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn])
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// jonas.location = 'Portugal'
// jonas['twitter'] = '@jonasschmedtman'
// console.log(jonas)

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

//// Object Methods ////
const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    // calcAge: function (birthYear) {
    //   return 2037 - birthYear
    // }
  
    // calcAge: function () {
    //   // console.log(this)
    //   return 2037 - this.birthYear
    // }
  
    calcAge: function () {
      this.age = 2037 - this.birthYear
      return this.age
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
}

console.log(jonas2.calcAge())

console.log(jonas2.age)
console.log(jonas2.age)
console.log(jonas2.age)

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas2.getSummary())

//// Iteration: The for Loop ////

// console.log('Lifting weights repetition 1 🏋️‍♀️')
// console.log('Lifting weights repetition 2 🏋️‍♀️')
// console.log('Lifting weights repetition 3 🏋️‍♀️')
// console.log('Lifting weights repetition 4 🏋️‍♀️')
// console.log('Lifting weights repetition 5 🏋️‍♀️')
// console.log('Lifting weights repetition 6 🏋️‍♀️')
// console.log('Lifting weights repetition 7 🏋️‍♀️')
// console.log('Lifting weights repetition 8 🏋️‍♀️')
// console.log('Lifting weights repetition 9 🏋️‍♀️')
// console.log('Lifting weights repetition 10 🏋️‍♀️')

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 20; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}

//// Looping Arrays, Breaking and Continuing ////
const jonasArray2 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
const types = []

// console.log(jonasArray2[0])
// console.log(jonasArray2[1])
// ...
// console.log(jonasArray2[4])
// jonasArray2[5] does NOT exist

for (let i = 0; i < jonasArray2.length; i++) {
// Reading from jonas array
    console.log(jonasArray2[i], typeof jonasArray2[i])

    // Filling types array
    // types[i] = typeof jonasArray2[i]
    types.push(typeof jonasArray2[i])
}

console.log(types)

// const years = [1990, 1967, 2002, 2010, 2018] - already declared
const agesArray = []

for (let i = 0; i < years.length; i++) {
  agesArray.push(2037 - years[i])
}
console.log(agesArray)

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray2.length; i++) {
  if (typeof jonasArray2[i] !== 'string') continue

  console.log(jonasArray2[i], typeof jonasArray2[i])
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonasArray2.length; i++) {
  if (typeof jonasArray2[i] === 'number') break

  console.log(jonasArray2[i], typeof jonasArray2[i])
}

//// Looping Backwards and Loops in Loops ////
// const jonasArray2 = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ] - already declared
  
// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonasArray2.length - 1; i >= 0; i--) {
    console.log(i, jonasArray2[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise} --------`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`)
    }
}

//// The while Loop ////
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
// }
  
let rep = 1
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`)
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
//   if (dice === 6) console.log('Loop is about to end...')
// }