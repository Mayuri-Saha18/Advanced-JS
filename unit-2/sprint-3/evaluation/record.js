document.querySelector("form").addEventListener("submit",myEmployees);
function myEmployees(event) {
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let id=document.querySelector("#employeeID").value;
    let depart=document.querySelector("#department").value;
    let experience=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mbl=document.querySelector("#mbl").value;
    // console.log(name,id,depart,exp,email,mbl);

let row=document.createElement("tr");
let column1=document.createElement("td");
column1.innerText=name;
let column2=document.createElement("td");
column2.innerText=id;
let column3=document.createElement("td");
column3.innerText=depart;
let column4=document.createElement("td");
column4.innerText=experience;
let column5=document.createElement("td");
column5.innerText=email;
let column6=document.createElement("td");
column6.innerText=mbl;
let column7=document.createElement("td");
if(experience>5){
    column7.innerText="Senior";
}else if(experience>=2 && experience<=5){
    column7.innerText="Junior";
}else{
    column7.innerText="Fresher";
}
let column8=document.createElement("td");
column8.innerText="Delete";
column8.style.backgroundColor="red";

row.append(column1,column2,column3,column4,column5,column6,column7,column8);
document.querySelector("tbody").append(row);
// console.log(row,column1,column2,column3,column4,column5,column6,column7,column8);
column8.addEventListener("click",rowDelete);
}
function rowDelete(event){
    event.target.parentNode.remove();
}