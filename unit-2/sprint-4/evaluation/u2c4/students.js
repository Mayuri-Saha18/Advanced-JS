// All the Code for All Students Page Goes Here
let stuData=JSON.parse(localStorage.getItem("admission"));
console.log(stuData);

let admit=JSON.parse(localStorage.getItem("admission-accepted")) || [];

let reject=JSON.parse(localStorage.getItem("admission-rejected")) || [];

// windows.addEventListener("load",function(){
//     displayData(stuData)
// });
function displayData(stuData) {
    document.querySelector("tbody").innerHTML="";
    stuData.map(function(elem,index){
        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        td1.innerText=elem.name;
        let td2=document.createElement("td");
        td2.innerText=elem.email;
        let td3=document.createElement("td");
        td3.innerText=elem.course;
        let td4=document.createElement("td");
        td4.innerText=elem.gender;
        let td5=document.createElement("td");
        td5.innerText=elem.phone;
        let td6=document.createElement("td");
        td6.innerText="Admitted";
        td6.style.backgroundColor="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click", function(){
            addAdmit(elem);
            deleteData(index);
        });
        let td7=document.createElement("td");
        td7.innerText="Rejected";
        td7.style.backgroundColor="red";
        td7.style.cursor="pointer";
        td7.addEventListener("click", function(){
            addReject(elem);
            dltData(index);
        });

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    })
}
displayData(stuData)
filter.addEventListener("change",function(){
    if(filter.value === "All"){
        displayData(stuData)
    }else{
        let filtered=stuData.filter(function(elem){
            return elem.course===filter.value;
        })
        displayData(filtered)
    }
})

function addAdmit(elem) {
    console.log(elem);
    admit.push(elem);
    localStorage.setItem("admission-accepted",JSON.stringify(stuData));

}
function deleteData(index) {
    stuData.splice(index,1);
    localStorage.setItem("admission",JSON.stringify(stuData))
}
function addReject(elem) {
    console.log(elem);
    reject.push(elem);
    localStorage.setItem("admission-rejected",JSON.stringify(stuData));

}
function dltData(index) {
    stuData.splice(index,1);
    localStorage.setItem("admission",JSON.stringify(stuData))
}