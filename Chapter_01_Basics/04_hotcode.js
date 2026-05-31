
function add (a,b) {
    return a + b;
}
let result;

for (i=0; i<1000;i++) {

    console.log("Print value: ", +i);
    result = add(i, i+1);

}
console.log("1000",result);