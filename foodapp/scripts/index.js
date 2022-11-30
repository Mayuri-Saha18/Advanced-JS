import { getData,display } from "./fetch.js";



async function fooditem(){
    let query=document.querySelector("#searchBox").value;
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    let data=await getData(url)
    let show=document.querySelector("#show")
    show.innerHTML="";
    display(data,show)
}


fooditem();


let search=document.getElementById("searchBox");
search.oninput=debounce;

let id;
function debounce(){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        fooditem();  
    },2000)
}

debounce();