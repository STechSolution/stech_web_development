/*
let js = 'My Second Favorite Language';
if (js === 'My Second Favorite Language') console.log(js);

console.log(430 + 4322 + 293 + 890);

let firstName = 'Damien';
console.log(firstName);

let country = 'USA';
let continent = 'West Virginia';
let population = 1800000;
console.log(country, continent, population);

let isIsland = continent;
console.log(isIsland);

/* Object Reference
let user1 = {
    name: "Erik",
    position: "CEO",
    age: 30,
    rank: "Hacker/Analyst",
    family: true,
    married: false,
};

console.log(user1.rank);

/* Variable-Primitive Reference
let firstName1 = 'Bella';
let age = 12;
*/
// Always use const to declare variables, unless you know forsure that the variable will change..
// let age = 30;
// const birthYear = 1991;

// const now = 2037;
// const ageErik = 2037 - birthYear;
// const ageDamien = 2037 - 2019;
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// const firstName = 'erik';
// const lastName = 'snider';
// console.log(firstName + ' ' + lastName);

// let year = now;
// console.log(year);
// console.log(typeof (year))
// console.log(typeof (firstName))


// // Assignment Operators
// let x = 10;
// x += 10; // Adds 10 to x
// console.log(x)
// x *= 3; // Times x by 3
// console.log(x)
// x++; // Adds 1 to x
// console.log(x)
// x--; // Decrease's x by 1
// console.log(x);

// // Comparison Operators
// console.log(ageErik > ageDamien);
// console.log(ageDamien);

// Mark and Hogn are trying to compare their BMI (body mass index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height)

// const marksWeight = 172;
// const marksHeight = 5.5;

// const johnsWeight = 203;
// const johnsHeight = 6.3;

// const marksBMI = marksWeight / marksHeight ** 2;
// const johnsBMI = johnsWeight / johnsHeight ** 2;

// if (johnsBMI > marksBMI) console.log(johnsWeight, johnsWeight);

// console.log(marksBMI);
// console.log(johnsBMI);

// const firstName = 'Erik';
// const job = 'I.T Analyst/Web Pentester/Hacker Guru';
// const birthYear = 1991;
// const yearNow = 3039;

// // Formatted strings for JavaScript
// const erik = `I'm ${firstName},\n\ 
// I am currently an ${job}.\n\ 
// I've been doing it now for ${(yearNow - birthYear) / 2} years.`;

// console.log(erik);

// console.log(`Multiple
// line
// String`);

// const age = 29;
// if (age >= 18) {
//     console.log(`Sarah can start driving 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// const massMark = 95;
// const heightMark = 2.88;
// const massJohn = 85;
// const heightJohn = 2.23;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn}..) `)
// } else {
//     console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})..`)
// }
// const inputYear = '1991';

// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 2021);
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(19, 153, 15);
// let scoreKoalas = calcAverage(344, 66, 276);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
//     } else {
//         console.log(`No one wins.. (Dolphins score: ${scoreDolphins} Koalas score: ${scoreKoalas})`);
//     }
// };
// checkWinner(scoreDolphins, scoreKoalas);

const calcAge = function(yearNow, birthYear) {
    return yearNow - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retire's in ${retirement} years..`;
    } else {
        return `${firstName} has been retired for ${retirement}..`;
    }
    //return statement;
    // return (`${firstName} retires in ${retirement} years.`);
}

console.log(yearsUntilRetirement(1991, 'erik'));
let damien = yearsUntilRetirement(2018, 'damien');
document.write(damien);