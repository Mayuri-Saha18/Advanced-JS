// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// console.log(obj);


function myFunction(x, y, z) {
    return x+y+z
}
const args = [0, 1, 2];

let my=myFunction(...args);
console.log(my);
