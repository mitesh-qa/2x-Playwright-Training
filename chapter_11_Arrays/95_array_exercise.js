let arr1= [1,2,3];
arr1.push(4,5);
arr1.pop();
console.log(arr1);

let arr2 = [];

for(let i = 0; i< arr1.length -1; i++)
{
    arr2.push(arr1[i] + arr1[i + 1]);

}
console.log(arr2);  // new array [1+2, 2+3, 3+4] = [3, 5, 7]

