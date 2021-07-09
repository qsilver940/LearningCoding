'use strict';

// let hasDriversLicense = false
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio'
// // const private = 534;

// function logger() {
//     console.log('My name is Jonas');
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0)
// const orangeJuice = fruitProcessor(0,5)

// console.log(fruitProcessor(0,5))
// console.log(appleJuice)
// console.log(orangeJuice)

// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice)

//Function Assignment 
// function describeCountry(country, population, capitalCity) {
//     const describeCountry = `${country} has ${population} and its capital city is ${capitalCity}.`
//     console.log(describeCountry)
//     return describeCountry
// }

// const desFinland = describeCountry('Finland', '6 million', 'Helsinki;')
// const desPeru = describeCountry('Peru', '33 million', 'Lima')
// const desIceland = describeCountry('Iceland', '356 thousand', 'Reykjavik')

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} and its capital city is ${capitalCity}.`
// }
// console.log(`${desFinland}
// ${desPeru}, 
// ${desIceland}`);

//Function Declaration example
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1)

// //Function Expression example

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1993)
// console.log(age1, age2)

//Function Declaration Assignment

const percentageOfWorld1 = function (Population) {
    return Population / 7900 * 100
}

const percWorldChina = percentageOfWorld1(1441).toFixed(2)
const percWorldPeru = percentageOfWorld1(33).toFixed(2)
const percWorldCanada = percentageOfWorld1(37).toFixed(2)

console.log(percWorldCanada, percWorldChina, percWorldPeru)

function percentageOfWorld2(Population) {
    return Population / 7900 * 100
}

const percWorldUs = percentageOfWorld2(328).toFixed(2)
const percWorldCuba = percentageOfWorld2(11).toFixed(2)
const percWorldAustralia= percentageOfWorld2(25).toFixed(2)

console.log(`${percWorldUs}
${percWorldCuba}
${percWorldAustralia}`)