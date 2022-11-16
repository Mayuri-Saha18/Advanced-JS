import { sidebar } from "../components/sidebar.js";

let side = document.getElementById("sidebar");
sidebar(side)

let data = JSON.parse(localStorage.getItem("news"));
let container = document.getElementById("show_news");

let img = document.createElement("img");
let h3 = document.createElement("h3");
let h4 = document.createElement("h4");

img.src = data.urlToImage;
h3.textContent = data.title;
h4.textContent = data.description;

container.append(img, h3, h4);