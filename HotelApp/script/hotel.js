
const getData = async(page_number) => {
    try {
     let res = await fetch(`https://coding-mock.onrender.com/hotels?_page=${page_number}&_limit=4`);
     let data = await res.json();
     console.log(data);
     appendData(data);
    } catch (error) {
     console.log(error);
    }
 }
 
 getData()
 
 let container = document.getElementById('hotel-card');
 
 function appendData(data) {
     container.innerHTML = null;
     data.forEach((el) => {
         let div = document.createElement("div");
         div.setAttribute("class","main")
 
         let imgDiv = document.createElement("div");
         let img = document.createElement("img");
         img.src= el.image;
 
 
         let contentDiv = document.createElement("div")
 
         let category = document.createElement("p");
         category.innerText= 'Category:'+el.category;
 
         let adults = document.createElement("p");
         adults.innerText= 'Adults:'+el.adults
 
         let capacity = document.createElement("p");
         capacity.innerText= `Capacity:${el.capacity}`
 
         let faci = document.createElement("p");
         faci.innerText= "Closet with hangers, HD TV"
 
 
         let bedType = document.createElement("p");
         bedType.innerText= el.bedType
 
         let price = document.createElement("p");
         price.innerText= el.cost+"/night"
         
         let bookBtn = document.createElement("button");
         bookBtn.innerText = "Book";
         bookBtn.setAttribute('class','btn')
 
         contentDiv.append(category,adults,capacity,faci,bedType,price,bookBtn);
         imgDiv.append(img);
         div.append(imgDiv,contentDiv)
       
          
          container.append(div)
     })
 }
 
 // Pagination
 const shoeBtn = (results,per_page)=> {
 let button_div = document.getElementById("buttons");
 let buttons = Math.ceil(results/per_page);
 for(let i=1; i<=buttons; i++){
     let button = document.createElement("button");
     button.innerText = i;
     button.onclick = function() {
   getData(i);
     }
    button_div.append(button);
  }
 }
 shoeBtn(10,2);
 
 
let sort=document.getElementById("sort")
sort.addEventListener("change",function(){
    container.innerHTML=""
    if(sort.value==="asc"){
        fetch("https://coding-mock.onrender.com/hotels/?_sort=cost&_order=asc")
        .then((res)=>res.json())
        .then((data)=>{
            appendData(data)
        })
        .catch((err)=>console.log(err))
    }
    if(sort.value==="desc"){
        fetch("https://coding-mock.onrender.com/hotels/?_sort=cost&_order=desc")
        .then((res)=>res.json())
        .then((data)=>{
            appendData(data)
        })
        .catch((err)=>console.log(err))
    }
})

let filter=async()=>{
    container.innerHTML=""
    let filters=document.getElementById("filter").value;
    let res=await fetch(
        `https://coding-mock.onrender.com/hotels/?category=${filters}`
    )
    let data=await res.json();
    if(data.length===0){
        let heading=document.createElement("h1");
        heading.innerText="No Hotels Found"
        container.append(heading)
    }else{
        appendData(data)
    }
}