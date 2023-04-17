async function getData(id){
    await fetch(`https://mock-server-6-6ljm.onrender.com/recipes/${id}`)
       .then(res=>res.json())
       .then(res=>appendData(res.data))
       console.log(res)
    }
  getData()
  
  let cartLs = JSON.parse(localStorage.getItem("cart")) || [];
 let container = document.querySelector("#recipe-container");
 
    cartLs.forEach((el,index) => {
      getData(el)
     })
    
   let mainArr = [];
   function appendData(res) {
    let sum = 0;
    mainArr.push(res)
    console.log(res)
    container.innerHTML = "";

    mainArr.forEach((res,index) => {

let div = document.createElement("div");

let p1 = document.createElement("h2");
p1.innerText = res.title;

let p2 = document.createElement("p");
p2.innerText = res.description;

let p3 = document.createElement("p");
p3.innerText = res.category;

let p4 = document.createElement("p");
p4.innerText = res.ingredients;

let p5 = document.createElement("p");
p5.innerText = res.instructions;

div.append(p1,p2,p3,p4,p5)

container.append(div)
})

}

