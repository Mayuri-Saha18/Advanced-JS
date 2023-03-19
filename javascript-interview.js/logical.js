console.log( null || 2);//2
console.log( null && 2);//null
console.log(2 && 3) ;//3
console.log( null || (2 && 3));//3
console.log((2 && 3) || 4 );//3
console.log( 3 || 4 );//3
console.log( null || (2 && 3) || 4 );//3


let x = (1 && 2) ?? 3;
console.log(x);//2