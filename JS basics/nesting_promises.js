function isEven(num) {
    return new Promise((resolve, reject) => {
        console.log("checking num is even or not");
        if (num % 2 === 0) {
            resolve(num + " is even");
        }
        else {
            reject(num + " is odd");
        }
    });
}

// isEven(11)
// .then(resp => console.log(resp))
// .catch(err => console.log(err))
// .finally(()=> console.log("checked the no"));

// chaning promises
isEven(10)
    .then(resp => {
        console.log(resp);
        return isEven(81);
    })
    .then(resp => {
        console.log(resp);
        return isEven(86);
    })
    .then(resp => {
        console.log(resp);
        return isEven(99);
    })
    .then(resp => {
        console.log(resp);
        return isEven(6);
    })
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => console.log("basic example of promises chanining"))