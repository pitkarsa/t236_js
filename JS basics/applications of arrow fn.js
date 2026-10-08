// higher order functions
// functions that take other function as parameter

// function higher_order( func1){

// }

// const test = n => n >= 0 ; // returns boolean

function positiveNegative(fn, num){
    if(fn(num)) // test(10)
        console.log("num is positive");
    else
        console.log("num is negative");     
}

// arrow functions are passed to higher order fn as a parameter , when we call the higher order function
// positiveNegative(test, 10);
positiveNegative(n => n >= 0 , 10);

// filter is inbuilt higher order fn
// the arrow fn passed to filter must return a boolean
const data = [10, -34, 25, -11, 56, 90, -42, 5];
// only the no which are > 20
const newArray = data.filter( n => n>20 );
console.log(newArray);

// array of no which are positive
const positives = data.filter( n => n >= 0 );

const evens = data.filter(n => n%2 == 0);


// map - mapping
// 3 --> 13
// 5 --> 15
// 2 --> 12
// 11 --> 21

const values = [3,5,2,11];
const updatedValues = values.map( n => n+10 );
console.log(updatedValues);// [13, 15, 12, 21]

// squares of each no
// const squares = values.map(n => n*n );
const squares = values.map(n => n**2 ); // [9, 25, 4, 121]








// positiveNegative(n => n >= 0, 10);

