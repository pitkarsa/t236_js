/*
AJAX - XHR were used to send the HTTP request to fetch the data from server

fetch(url)
it is used to send the requset fom client to server
it returns a promise

const stu = {
    "id":101,
    "name":"amit"
}
*/

fetch('https://dummyjson.com/products') // returns a promise
.then(resp => {
    console.log(resp);
    return resp.json(); // return another promise
}) 
.then(data => console.log(data))
.catch(err => console.error(err))
.finally(()=> console.log("fetch completed"));