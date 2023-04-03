

// this is how we writ the funtion and opreat the total value 
// function sum ( math, history, science){
//     return math+history+ science;
// }

// let total = sum(60,50,70)
// console.log(total)

// // but what heppen when we not pass the one value of subject like science
// it gives us NaN error
// function sum ( math, history, science){
//     return math+history+ science;
// }

// let total = sum(60,50)
// console.log(total)


// for rectify is error we do something like that on the old version

// function sum ( math, history, science){
//     math=math||0
//     history=history||0
//     science=science||0
    
//     return math+history+ science;
// }

// let total = sum(60,50)
// console.log(total)


// but in new virsion we can provide the prameter to defult value for the ES6 concept
function sum(math=0,history=0,science=0){
   
    science=science||0
    
    return math+history+ science;
}

let total = sum(60,50)
console.log(total)
