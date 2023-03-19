console.log(x); // undefined
  var x=5;
console.log(x); // 5


console.log(x); // ReferenceError: x is not defined
  let x=5;
console.log(x); // 5


// 2. variables declared using the let keyword can not be re-declared

var x = 1;
var x = 2;
console.log(x); // 2

let y = 1;
// let y = 2;
 // SyntaxError: Identifier 'y' has already been declared
console.log(y);

// 3. Variables declared using var are scoped by functions only, not other blocks.

function fun() { 
  
  if (true) { 
    var x = 2;
    console.log('x inside if block ', x); // 2
  }
  
  console.log('x inside fun function', x); // 2
  
}

fun();
console.log('x outside fun function', x) // ReferenceError: x is not defined