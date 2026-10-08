// reusable block of code

/*
// non-parameterized and void function
function sayHi(){
    console.log("hi");
    console.log("Welcome to JS");
}
// types
// void and non-void functions - based on return value
// parameterized and non-parameterized functions

// non parameterized non-void functions
function getPi(){
    return 22/7;
}
sayHi();
sayHi();
let p = getPi();
console.log(p);
let area = p*5*5;
console.log("PI="+getPi());

*/

/*
// parameterized functions
// parameterized void function
function add(n1, n2){
    let answer = n1+n2;
    console.log("addition="+answer);    
}
add(10,20);
add(10,"20");
add("10","20"); // 
add(10); //
add(10,20,50);
let x;
console.log(x);
*/
/*
// parameterized non-void function
function subtract(n1,n2){
    return n1-n2;
}
let sub = subtract(50,60);
console.log(sub);
*/

/*
//functions in JS are first class citizens
// functions can be stored in the form of variables/ constants
const calculate = function (n1,n2){   
    return n1*n2;
};

let m = calculate(10,20)
// console.log(m);
// console.log(typeof calculate);

// arrow functions - lambda functions
// const name = (parameters) => return_value
const multiply = (n1,n2) => n1*n2;
let product = multiply(20,10);
console.log("product="+product);

*/
const multiplication = (n1,n2) => {
                            let answer = n1*n2;
                            return answer;
                        };
let prod = multiplication(50,100);
console.log(prod);

function cube(n){
    return n**3;
}

let answer = cube(5);
console.log("cube of 5 is " + answer);
console.log("cube of 5 is " + cube(5));


const c = n => n**3;
console.log("cube of 10 is "+ c(10));
console.log(c);




