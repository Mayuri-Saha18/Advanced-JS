// The spread operator is used to expand an array or object into individual elements. It is typically used to concatenate arrays or objects or to pass an array of arguments to a function that expects separate arguments.


let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 };

console.log(obj3); 


let arr1 = [1, 9, 3];
let arr2 = [4, 0, 6];
let arr3 = [...arr1, ...arr2]; 
// concatenate arrays

function sum(x, y, z) {
  return x + y + z;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); 
//pass array of arguments to function