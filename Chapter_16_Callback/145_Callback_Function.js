
function callWhenItemisReady() {
    console.log("calling 9876543210");
}

function cafe(item, callWhenItemisReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenItemisReady();
}

//cafe("Burger", callWhenItemisReady);

cafe("Pizza", function () {
    console.log("calling 8765432123");
})

cafe("Momos", () => {
    console.log("calling 3543543");
});