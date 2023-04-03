// All the JS Code for the Add Students Page Goes Here
document.querySelector("#form").addEventListener("submit",myFunc);
let stuArr=JSON.parse(localStorage.getItem("admission")) || [];
function myFunc(event){
    event.preventDefault();
    let stuObj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
        gender:document.querySelector("#gender").value,
        course:document.querySelector("#course").value,
    };
    stuArr.push(stuObj);
    localStorage.setItem("admission",JSON.stringify(stuArr));
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
    document.querySelector("#phone").value="";
    document.querySelector("#gender").value="";
    document.querySelector("#course").value="";
}