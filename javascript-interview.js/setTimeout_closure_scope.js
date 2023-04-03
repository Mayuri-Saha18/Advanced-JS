// setTimeout closure scope example ( Amazon interview question )

// var arr = [1,2,3];
// for(var  i=0;i<arr.length;i++){
//     setTimeout(function(){
//         console.log(i,arr[i]);
//     }, i *1000)
// }

// console.log(`the value of i is ${i}`)


// second way to ask the question 

// let arr = [1,2,3];

// function display(i){
//     setTimeout(function(){
//         console.log(i,arr[i])
//     }, i*1000)
// }

// for(var  i=0;i<arr.length;i++){
//     display(i)
// }


// third way to ask question always see the video 

let arr = [1,2,3];

function display(i){
    var that = this
    setTimeout(function(){
        console.log(i,that[i])
    }, i*1000)
}

for(var  i=0;i<arr.length;i++){
    display.call(arr,i)
}


// scope;
//closure;
//async,for loops
// call / apply,bind
//arrow function

// also explore the below things
 //connect in redux
 //hooks