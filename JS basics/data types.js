// data types
// number, string, boolean, object

let stuName = "Amit"; // string
let age = 20; // number
let percentage = 85.24; // number
let result = true; // boolean

console.log(typeof stuName);
console.log(typeof age);
console.log(typeof percentage);
console.log(typeof result);

// dynamically typed language
// data type of any variable is not fixed(static)
// as per the content, data type of variable changes
stuName = 1005;
age = "25";

console.log(typeof stuName);
console.log(typeof age);

// object - has key-value pairs (JSON)
let student = {
    "id":101,
    "name":"Rahul",
    "branch": "Comp",
    "percent":75.69,
    "college name":"VJTI"
};

console.log(typeof student);

// accessing specific values by using keys
console.log(student.name); // Rahul
console.log(student["percent"]); // 75.69

// when to use [] - dynamic property access
console.log(student["college name"]);
// user defines the key
let choice = "percent"; // user input
console.log(student[choice]); // Comp

let data;
console.log(data); // undefined

