function isEven(num) {
    return new Promise((resolve, reject) => {
        // console.log("checking num is even or not");
        if (num % 2 === 0) {
            resolve(num + " is even");
        }
        else {
            reject(num + " is odd");
        }
    });
}

// if promises chaining is a complex code, every then defines a complex code
// then use async-await

// async await is a synchrounous way to execute asynchronous activities

async function promiseChaining() {
    try {
        const resp1 = await isEven(8);
        console.log(resp1);
        const resp2 = await isEven(12);
        console.log(resp2);
        const resp3 = await isEven(20);
        console.log(resp3);
        const resp4 = await isEven(25);
        console.log(resp4);
        const resp5 = await isEven(6);
        console.log(resp5);
    }
    catch (exception) {
        console.log("something went wrong");

    }
}

promiseChaining();