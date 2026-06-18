let order = new Promise(function (resolve, reject) {
    let foodready = false;
    if (foodready) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order Cancelled!")
    }
})

//console.log(order);

order.then(function (data) {
    console.log("Data is success!!")
}).catch(function (error) {
    console.log(error)
});