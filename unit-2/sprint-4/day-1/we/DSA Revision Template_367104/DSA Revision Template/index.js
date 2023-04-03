document.querySelector("form").addEventListener("submit",myDsa);
let data=JSON.parse(localStorage.getItem("quedata")) || [];
console.log(data);
displayTab(data);
function myDsa(event){  
    event.preventDefault();
    let Obj={
        title: document.querySelector("#title").value,
        link: document.querySelector("#link").value,
        level: document.querySelector("#difficulty").value,

    };
    data.push(Obj);
    console.log(data);
    displayTab(data);
    localStorage.setItem("quedata",JSON.stringify(data))
}
function displayTab(data){
    document.querySelector("tbody").innerText="";
    data.forEach(function (elements){

        tr=document.createElement("tr");

        td1=document.createElement("td");
        td1.innerText=elements.title;

        td2=document.createElement("td");
        td2.innerText=elements.link;

        td3=document.createElement("td");
        td3.innerText=elements.level;

        td4=document.createElement("td");
        if(elements.level=="Easy"){
            td4.innerText="No";
        }else{
            td4.innerText="Yes";
        }
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
    })
}