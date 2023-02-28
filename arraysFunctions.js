//  QUES 1 
let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];

//  QUES 1A. subtracting values of fisrt element from last element
let subtractedValue = ages[ages.length-1] - ages[0];
console.log(`last element subtrated from first element is ${subtractedValue}`);

//  QUES 1B. adding new value to ages and repeating 1A.
ages.push(21);
let newSubtractedValue = ages[ages.length-1] - ages[0];
console.log(`last element subtrated from first element is ${newSubtractedValue}`);

//  QUES 1C loop through array calc average
//  used array.map to calc average
var averageAge = 0;
let result = ages.map(age => averageAge += age);
console.log(`averageAge  = ${totalNumber / ages.length}`);

// using loop to calc average
let totalNumber = 0;
for(let i=0; i < ages.length; i++) {
    totalNumber += ages[i];
}
console.log(`Average Age = ${totalNumber / ages.length}`);



//  QUES 2
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//  QUES 2A. using loop to calc average number of letter per name
let AverageNumberOfLeters = 0;
for(let i=0; i < names.length; i++) {
    AverageNumberOfLeters += names[i].length;
}
console.log(`Average Numbers of letters = ${AverageNumberOfLeters  / names.length}`);


//  QUES 2B Using loop to concertenate elements of array
let allElements = '';
for(let i=0; i < names.length; i++) {
    allElements += ` ${names[i]}`;
}
console.log(allElements);


// QUES 3.  How do you access the last element of any array?
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(`last element is accessed by: array.length-1  = ${names.length-1}`);


// QUES 4.  How do you access the first element of any array?
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(`first element is accessed by: array[0]  = ${names[0]}`);


//  QUES 5 creating a nameLengths array
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
var nameLengths =[];
for(let i=0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);


//  QUES 6 using loop to calc total values of all elements of namelength

let allValues = 0;
for(let i=0; i < names.length; i++) {
    allValues += names[i].length;
}
console.log(`All values of namesLength add up to: ${allValues}`);



 
//  QUES 1
//  QUES 1
//  QUES 1
//  QUES 1
//  QUES 1
//  QUES 1
//  QUES 1
//  QUES 1
//  QUES 1
//  QUES 1

