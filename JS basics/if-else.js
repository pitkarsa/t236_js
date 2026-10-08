let num1 = 100;
let num2= 20;
/*
if(num1 > num2){
    // true block-if block
    console.log(num1 +" is largest");
}
else{
    // else/ false block
    console.log(num2 +" is largest");
}

// 

// result = (condition)?true_answer: false_answer;
let largest = (num1>num2)?num1:num2;
console.log("the largest no is "+largest);

*/

let num=10; // var global declaration
// let, const  is block scoped
// const, let , var
if(num==10){
    let square = num**2;
    console.log(square);  
    var data = 1000;  
}
else{
    var cube = num**3;
    console.log(cube);    
}
console.log(data); // 1000, 

console.log(square); // error, as square is block scoped
console.log(percentage);// undefined
console.log(cube);// undefined






