const myAge = 38;
// Set myAge to 38
if (myAge < 0) {
    console.log('Age cannot be negative.');
}
let earlyYears = 2;
// set earlyYears to 2
earlyYears *= 10.5;
let laterYears = myAge - 2;
//substrac 2 from my age
laterYears *= 4;
//Calculate the number of dog years
console.log(earlyYears, laterYears);
// Check the values of earlyYears and laterYears
const myAgeInDogYears = earlyYears + laterYears;
//store earlyYears and laterYears in myAgeInDogYars
const myName = 'Marcel'.toLowerCase();
//method to write all letters in lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)