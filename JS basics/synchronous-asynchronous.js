// synchronous tasks/ functions
function getData(url){
    // sending the request to server at given url
    for(let i=1; i<=9000000000;i++){
        // for loop to generate the delay
    };
    let data = [10,11,12,13,14];
    return data;
}
// console.log("requesting the data");
// let response1 = getData("http://www.amazon.in");
// console.log("got the response");
// console.log(response1);

// asynchronous 
// inbuilt methods
// setTimeout(callback_fn, delay_in_ms)
// callback_fn, is a function that will get executed after
// completing the given task

// console.log("starting 5s delay");
// setTimeout(()=>console.log("done with the delay"),5000);
// console.log("asynchronous behaviour");


console.log("starting with interval");
let id= setInterval(()=>console.log("done with 1s delay"), 1000);
setTimeout(()=> clearInterval(id), 10000);
console.log("checking asynchronous");


function myAsynchronousFn(callback, count){
    for(let i=1; i<=count;i++){
        console.log(i);        
    }
    callback();
}


myAsynchronousFn(()=>console.log("done with count"), 100000);



