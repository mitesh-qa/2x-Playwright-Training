let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

//splice(start, deleteCount, ...itemsToAdd)

arr.splice(2, 1);           //deleted index-2
console.log(arr);           // Index-2 deleted.

//arr.splice(2, 0, 99);     //added value at index-2
arr.splice(2, 1, 99);       //repace index-2 value with 99
console.log(arr);

arr.splice(1, 2, 10, 20);   //Replace Index-1 & 2 values with 10 & 20
console.log(arr);