// Write code related to Volatiers Page
let data=JSON.parse(localStorage.getItem("Helpers")) || []
shoeData(data)
function shoeData(data){
    let tablebody=document.querySelector("tbody")
    tablebody.innerText=""

    data.forEach((el,i) => {
        if(el.type==="Volantier"){
            let tr=document.createElement("tr")

            let td1=document.createElement("td")
            td1.innerText=el.name
            let td2=document.createElement("td")
            td2.innerText=el.number
            let td3=document.createElement("td")
            td3.innerText=el.email
            let td4=document.createElement("td")
            td4.innerText=el.category
            let td5=document.createElement("td")
            let tbn=document.createElement("button")
            tbn.innerText="Delete"
            tbn.onclick=()=>deleted(i)
            td5.append(tbn)
            tr.append(td1,td2,td3,td4,td5)
            tablebody.append(tr)
        }
    })
}

function deleted(i){
    data.splice(i,1);
    localStorage.setItem("Helpers",JSON.stringify(data))
    window.location.reload()
}
function filtered(event){
    const {value}=event.target
    if(value===""){
        shoeData(data)
    }else{
        let filtering=data.filter((el)=>
        el.category==value)
        shoeData(filtering)
    }
}