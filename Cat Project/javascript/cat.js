

async function getCatImages() {
    try {
        let res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
        let data = await res.json();
        // console.log(data);
        appendCatImages(data);
    } catch (error) {
        console.log(error);
    }
}

getCatImages();

let container = document.querySelector("#cat-container");

let catImageArrayFormLS = JSON.parse(localStorage.getItem("catImageArray")) || [];

function appendCatImages(arr) {

    container.innerHTML = "";

    arr.forEach((el) => {

        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.url;

        let addtofavorite = document.createElement("button");
        addtofavorite.innerText = "Add to Favouites";

        addtofavorite.addEventListener("click", function () {
            alert("Cat Image Successfully added into the favourite");
            catImageArrayFormLS.push(el.url);

            localStorage.setItem("catImageArray", JSON.stringify(catImageArrayFormLS));
        })

        box.append(image, addtofavorite);

        container.append(box);
    })
}