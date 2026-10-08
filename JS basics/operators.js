// assignment operator =
// works from right to left
let num=100;
let n1=125, n2=10;
let addition;
addition = n1+n2;
// n1+n2 = addition; - invalid 
console.log("total="+addition);


// arithmetic operators: +,-, *, /, %, **
// modulus- mod- %
let mod = n1%n2; // returns the remainder

// raised to/ power operator
let a=10, b=3;
// a^b
let answer = a**b;
console.log("a^b, 10^3 ="+answer);

// relational operators: <, <=, >, >=, ==, !=, ===  
// these return boolean answer
n1 = 20;
n2=50;
let n3=30;
console.log(n1 > n2);
console.log(n1 == n2);
console.log(n1 != n3);
console.log(n2 <= 50);

// === checks content and type
let val = 100;
let str = "100";

console.log(val == str);
console.log(val === str);
console.log(val/str);

// Arithmetic assignment operator: +=, -=, *=, /=, %=, **=
let balance=20000;
let amount = 5000;
balance += amount; // balance = balnce+ amount;
console.log("updtaed balance"+balance);




