let score="30abc";
let marks= null;
let boolean= true;
//console.log(typeof (score))

let valueInNumber = Number(score);
// console.log(typeof (valueInNumber))
// console.log(valueInNumber)
// console.log(typeof marks)
// console.log(marks)
//console.log(typeof boolean)
//console.log(boolean)


// Note: -
//Nuber is easly convert to a number.
//but "33abc" !== number the value i get NaN(Not A  Number) but typeof on NaN is number.
// if we take value True or False then we 1 or 0
//In Boolean If we pass  empty string "" then it False.
//If we pass any value "Value" then it it retuirn true.

let isLoggedIn = 1;
let isLoggedOff = 0;
let isLoggedStringIn ="Prince"
let isLoggedStringOf =""
 let booleanIsLoggedIn= Boolean(isLoggedIn)
 let booleanIsLoggedOff= Boolean(isLoggedOff)
 let booleanisLoggedStringIn= Boolean(isLoggedIn)
 let booleanisLoggedStringOff= Boolean(isLoggedOff)
 //console.log([booleanIsLoggedIn,booleanIsLoggedOff,booleanisLoggedStringIn,booleanisLoggedStringOff])

 let mark = 33;
 let convertString = String(33);
 //console.log(typeof convertString)

 //***************************************Operatrion************************************//
 // OPERATORS   => Plus+, Minus-, Multiply*, Power**, Remenders%, Divide/
let value = 3;
let negValue = -value
//console.log(negValue)

//console.table([2*2,2+2,2-2,2**3,4/2,9%2])
let str1 ="Hello";
let str2=" Prince";

let str3 = str1 + str2
//console.log(str3)

let str ="1";
let num = 1;

let strNum3 = str + num

let gameScore=100;
gameScore++
console.log(gameScore)
//Link to study=> https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-postfix-increment-operator

let x = 5;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
