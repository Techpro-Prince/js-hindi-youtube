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
 console.log(typeof convertString)