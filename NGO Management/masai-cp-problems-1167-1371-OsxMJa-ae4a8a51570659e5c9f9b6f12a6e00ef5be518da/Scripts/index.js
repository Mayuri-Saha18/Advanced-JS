// Write code related to Home Page
let data=JSON.parse(localStorage.getItem("Helpers")) || []

function fetchData(e){
    e.preventDefault();

    let datas={
        name:document.getElementById("name").value,
        number:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        category:document.getElementById("category").value,
        type:document.getElementById("type").value,
    }
    if(!datas){
        alert("please fill")
        return
    }
    data.push(datas)
    console.log(data)
    localStorage.setItem("Helpers",JSON.stringify(data))
}