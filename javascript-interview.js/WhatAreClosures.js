//closure
//what are closure
// why do we need to use them? 
//  what is currying?
// application

//closure:-a mechenism in which javascript maintains scope of some variables in closure scope, if the particular variable gose out of scope.

// it is only work with the function 

// javaScript 2 pass engine,lexical scope. it matters more on where your functions are decleard.

//example

// function outer(){
//     var a = 20
//     return function inner(b){
//         return a+b
//     }
// }

// let result = outer()
// console.log(result(10))


// the same thing I write in differnt way which is currying

    // function outer(a){
    //     return function(b){
    //         return a+b
    //     }
    // }

    // console.log(outer(20)(10))



 //// some other example of clouser
 
 function calculater (initialValuel=0){
    let value = initialValuel;

    function add(val){
        value = value+ val
        return value
    }
    return {add}
 }


 var cal = calculater()
 console.log(cal.add(10)) /// memoization

 console.log(cal.add(50)) /// 