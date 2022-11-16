let {country} = JSON.parse(localStorage.getItem("user"));

import { navbar } from "../components/navbar.js";
import { sidebar } from "../components/sidebar.js";

document.getElementById("navbar").innerHTML = navbar();

let side = document.getElementById("sidebar");
sidebar(side)

let India = document.getElementById("in");
India.addEventListener("click", () => {
    getData(India.id)
})
let Usa = document.getElementById("us");
Usa.addEventListener("click", () => {
    getData(Usa.id)
})
let China = document.getElementById("ch");
China.addEventListener("click", () => {
    getData(China.id)
})
let Uk = document.getElementById("uk");
Uk.addEventListener("click", () => {
    getData(Uk.id)
})
let Nz = document.getElementById("nz");
Nz.addEventListener("click", () => {
    getData(Nz.id)
})


// On search this function will get called after pressing enter in search box but it will only for "tesla" and "twitter".
let searchData = async () => {
    let container = document.getElementById("news_container");
    container.innerHTML = "";

    let q = document.getElementById("search").value

    try {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${q}`);

        let data = await res.json();

        appendData(data.articles);
    }
    catch (err) {
        console.log({ error: err })
    }
}


document.getElementById("search").addEventListener("keypress", (event) => {
    if(event.key == "Enter") {
        searchData();
    }
})


// Getting data query wise and appending it to DOM.
let getData = async (id) => {
    if(!id) {
        id = country;
    }
    try {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${id}`);
        
        let data = await res.json();

        appendData(data.articles);
    }
    catch(err) {
        console.log({error : err})
    }
};

getData();

let appendData = (data) => {
    let container = document.getElementById("news_container");
    container.innerHTML = "";

    console.log(data);
    data.map((ele) => {

        let div = document.createElement("div");
        div.className = "news";

        div.addEventListener("click", () => {
            localStorage.setItem("news", JSON.stringify(ele));

            console.log(ele);

            window.location.href = "./news.html"
        })

        let img = document.createElement("img");
        let title = document.createElement("h4");
        let author = document.createElement("h3");

        let div2 = document.createElement("div");

        img.src = ele.urlToImage;
        title.textContent = ele.title;
        author.textContent = ele.author;

        div2.append(title, author)

        div.append(img, div2)
        container.append(div);
    })
}

