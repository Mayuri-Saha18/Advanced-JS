let data = JSON.parse(localStorage.getItem("empData"))||[]
const container = document.getElementById("employeeDiv");
// console.log("container",container)

fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1"
).then((res)=>res.json())
 .then((res)=>{
    console.log(res)
    localStorage.setItem("empData",JSON.stringify(res.data))
    localStorage.setItem("Totalpage",res.totalPages)
    localStorage.setItem("page",1)
    appendData(res.data)
 })






///imp
window.addEventListener("load",function(){
    appendData(data)
})



//sorting
function handleByPrice(){
    var selected = document.querySelector("#sortPrice").value;
    // console.log(selected)
    if(selected == "") window.location.reload();
    // Sort Low to High
    if(selected == "lth"){
      data.sort(function(a,b){
        return a.salary - b.salary;
      });
      appendData(data);
    }

    // Sort High to Low
    if(selected == "htl"){
      data.sort(function(a,b){
        return b.salary - a.salary;
      });
      appendData(data);
    }
  }



  //filtering
  function handleFilter(){
    let selected = document.getElementById("filter").value;
    // console.log(selected)
    if(selected=="") window.location.reload();
    else{
        let filterList = data.filter(function(el){
            return el.department = selected
        })
        appendData(filterList)
    }
  }






//searching
  function handleOnSubmit(event){
    event.preventDefault()

    let text = document.getElementById("search").value
    console.log(text)

    let query = text.toLowerCase()

    let searchData = data.filter((el)=>{
        if(el.name.toLowerCase()==query){
            return el
        }
    })
    appendData(searchData)
  }




  //pagination
  function handleOnChangePage(event){
    const { value } = event.target;

    if(value =="1"){
        let pagData = data.slice(0,5)
        appendData(pagData)
    }else if(value == "2"){
        let pageData = data.slice(6,10)
        appendData(pageData)
    }else if(value == "3"){
        let pageData = data.slice(11,15)
        appendData(pageData)
    }else if(value == "4"){
        let pageData = data.slice(16,20)
        appendData(pageData)
    }else if(value == "5"){
        let pageData = data.slice(21,25)
        appendData(pageData)
    }else if(value == "6"){
        let pageData = data.slice(26,30)
        appendData(pageData)
    }else if(value == "7"){
        let pageData = data.slice(31,35)
        appendData(pageData)
    }
  }


 function appendData(data){
    // console.log("data",data)
  
    container.innerHTML = null;

  data.map((el, i) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = i;
    var td2 = document.createElement("td");
    var img = document.createElement("img");
    img.src = "../assets/img.jpeg";
    td2.append(img);

    var td3 = document.createElement("td");
    td3.textContent = el.name;

    var td4 = document.createElement("td");
    td4.textContent = el.department;

    var td5 = document.createElement("td");
    td5.textContent = el.gender;

    var td6 = document.createElement("td");
    td6.textContent = el.salary;

    tr.append(td1, td2, td3, td4, td5, td6);
    container.append(tr);
  });
 }


 