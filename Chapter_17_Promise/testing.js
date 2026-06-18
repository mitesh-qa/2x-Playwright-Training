let order = new Promise((resolve, reject) => {
    let foodready = false;

    if (foodready) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order Cancelled!");
    }
});

//console.log(order);

order
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });



let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User Data" });
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
})

// .then() runs ONLY when the promise resolves successfully.



console.log("5" + 2);

console.log("5" - 2);