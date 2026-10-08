// unary poerators: ++ increment, -- decrement
/*
// loops: used for recursive/ repeated execution of some code
// i is a loop variable ( controls the loop execution)
for( var i=1; i<=5; i++)
{
    // block of code
    console.log("Hi");
    console.log("Welcome to JS-loops");  
}
console.log("loop is terminated at i="+i);
*/
/*
for (initialization, condition, updation )
for( var i=1; i<=5; i++)
var i=1; // done once
    condition: 
*/

// array processing
// elements can be accessed by using index
// valid index: 0 to n-1 ( n is length of array)
// 
let data = [15,78,45,56,23,52,78,90,34,78];
// data[0]=> 15
console.log("no of elements "+data.length);

/*
console.log(data);
// accessing array elements, using indexing
for(let i=0; i<data.length; i++){
    // console.log(i);    index
   // console.log("index i="+i+" element at index "+data[i]);
    console.log(data[i]);    
}
*/

// accesing elements directly, without index
for( let n of data){
    // for loop will be executed 6 times, as data has 6 elements
    // at each time, one element is accessed uisng n
    console.log(n);    
}

// using loop, display 1,3,5,7,9
// using loop display 5,10,15,20,25
// using loop, display 5,4,3,2,1


// 1,3,5,7,9
for(let i=1; i <= 9  ; i = i+2){
    console.log(i);    
}
// 5,10,15,20,25
for(let i= 5 ; i<=25   ; i = i+5 ){
    console.log(i);    
}

// 5,4,3,2,1
for(let i=5; i >= 1; i--){
    console.log(i);    
}




