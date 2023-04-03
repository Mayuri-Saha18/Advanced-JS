// Rest parameter is an improved way to handle
// function parameter, allowing us to more easily
// handle various input as parameters in a function.
// The rest parameter syntax allows us to represent
// an indefinite number of arguments as an array


// it is a ES6 concept 

// compare with old version of doing thing and new virsion of doing through Es6(rest opretar)

//old version 
function sum (a,b,c,d,e,f){
    return a+b+c+d+e+f
}
let add = sum(1,2,3,4,5,6)
console.log(add)


// new virsion same code weiten with rest operetar
function addition(...rest){
    let total =0;
    for(let i of rest){
        total+=i
    }
    return total
}
let arr = addition(1,2,3,4,5,6)
console.log(arr)


/// some concept here
function fun(a,b,...c){
    console. log (`${a} ${b}`);
    console.log (c) 
    console.log (c[0]);
    console. log (c.length) ;
    console. log (c.indexOf ( "Edan"))
    
}
    fun( 'Ronaldo', 'Neymar','Pele','Messi', 'Edan');