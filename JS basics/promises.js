/*

Callback hell/ pyramid of doom 
 is a coding problem in JavaScript where many dependent asynchronous functions are nested inside each other, forming a hard-to-read pyramid shape

 In order to avoid the callback hell, we can use promises

 promise is a function, than can result in success(resolve) or failure(reject)

 promises states: resolve, reject and pending
*/

const egg = new Promise((resolve, reject)=>{
    console.log("its an egg");
    // resolve("its a chick");
    reject("its a broken egg");
});

// promises need to be subscribed
// .then() handles resolved state
// .catch() handles the rejected state
// .finally() is executed irrespective of resolve/reject
egg
.then(resp => console.log(resp))
.catch(err => console.error(err))
.finally(()=> console.log("finally is executed"));




