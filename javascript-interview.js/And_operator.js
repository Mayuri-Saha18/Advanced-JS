// let a = 'Prachi';
// let b = 'Sachin';
// let c = 'Rishi';
// let z = a && b && c;
// console.log(z);  //Rishi

// let a = 0;
// let b = 'Vivek';
// let c = 'Rishi';
// let z = a && b && c;
// console.log(z);  //0




// let bankbalance = 100;
// let accountactive = true;

// (bankbalance > 0) && (accountactive) && console.log('active');  //active




let bankbalance = 100;
let accountactive = false;

(bankbalance > 0) && (accountactive) && console.log('not active');


// Since accountactive is false, the condition (bankbalance > 0) && (accountactive) will evaluate to false, so the code inside the console.log statement will not be executed.
// Therefore, running this code will not produce any output.

// The precedence of AND && is higher than ||, so it executes first.