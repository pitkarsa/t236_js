// objects
const student = {
    "id":101,
    "name":"Tushar",
    "branch":"IT",
    "percentage":85.24
};

// console.log(typeof student); // object, 

const data = [10,20,30,58.25,"hi"]; // object, we call it array
// console.log(typeof data);// object





// rest operator (it is used on LEFT side of =)
const [n1,n2, ...values] = data; // sequence is important
// console.log(n1);
// console.log(n2);
// console.log(values);

// const id = student.id;
// const branch = student.branch;
// const details = {student.name, student.percentage}
const {id, branch, ...details} = student; // key names to be used while destructuring
// console.log(id);
// console.log(branch);
// console.log(details);// name, percenatge

// =====================
// object destructuring
const stu1 = {
    "id":102,
    "name":"Nikita",
    "std":"12th",
    "marks":{
        "phy":87,
        "chem":92,
        "math":86
    }
};
// separating the values of respective keys from object
// const name = stu1.name; // Nikita
// const std = stu1.std; //12th
// const marks = stu1.marks; // {"phy":87,"chem":92,"math":86    }
// const math = stu1.marks.math; // 86

// same can be achieved using object destructuring
const {name, std, marks} = stu1; // object destructuring
// console.log(name);
// console.log(std);
// console.log(marks); // { "phy":87, "chem":92,"math":86}

const {marks:{math}} = stu1; // destructuring of nested objects
// console.log(m2);

// ================== spread operator ===========
const data1 = data;
// console.log(data);
// console.log(data1);

// console.log(data[0]);//10
// console.log(data1[0]); //10

// data1[0]=50; // updating first elem
// data1.push(100); // adding new elem
// console.log(data1);
// console.log(data);

// here data and data1 are two references, but same object

// to create the independent copy we need to use spread operator
const data2 = [...data];
data2.push(500);
// console.log(data);
// console.log(data2);

const person = {
    "id":101,
    "name":"Tushar",
    "birthDate":"1 jan 2000",
    "address":"Thane"
};
const person1  = person; // one object, 2 references
// person.name="Nikhil";
// console.log(person1);
const person2 = {...person}; // independent copy of person
person.name="Nikhil";
console.log(person2);
delete(person.address);
console.log(person);
