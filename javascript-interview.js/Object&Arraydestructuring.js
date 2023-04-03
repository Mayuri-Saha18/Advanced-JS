// Object and array desttcutturing

// rest, spread, operater
// puting the value singl way 
// var person ={};
// person.name = "ujjwal Singh"
// person.vill = "RamPur"
// person.post = "sasamusa"


// puting the value multipul way

// var personDetail={
//     name: "ujjwal Singh",
//     vill : "Rampur",
//     post : "RamPur"

// }

//these are object desterturing
// let {name,vill ,post }=personDetail
// console.log(name,vill,post)

// if we want rename it 
//   const  {name:fName,vill ,post }=personDetail
//  console.log(fName,vill,post)

// we can do the same thing with the function

// function getData(){
//     return personDetail
// }
// console.log(getData())
// const  {name:fName,vill ,post }=personDetail
// console.log(fName,vill,post)



// ARRAY DESTEURTURING IS SIMLAR TO Object DESTEURTURING

// const array = ["ujjwal Singh", "Masai School", "India"]

// const [name ,orgination, country]= array;
// console.log(name, orgination, country)

// the same thing is do with the string 

// const str = 'Gyan_Singh Dauda_RamPur'

// const [name, vill] = str.split('\n')
// console.log(name,vill)
// console.log(str.split('\n'))

// some of the desteurturing 

// function fetchData({api,name,call}){
//   console.log(api,name,call)
// }

// let data = {
//     api:'https//ujjwalsingh.com/url',
//     name:"ujjwal singh",
//     call:"8743838837"
// }

// fetchData(data)


// another way to do the dataDesteurturing

// function fetchData(api,name,call){
//     console.log(api,name,call)
//   }
  
//   let data = {
//       api:'https//ujjwalsingh.com/url',
//       name:"ujjwal singh",
//       call:"8743838837"
//   }
  
//   fetchData(data.api,data.name,data.call)  but we have to mantian the data in order wise otherwise it is totly messed up



