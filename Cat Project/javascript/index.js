// https://api.thecatapi.com/v1/images/0XYvRd7oD
// https://api.thecatapi.com/v1/breeds


// cat project api function calls
async function getData () {
    try {
        let res = await fetch(`https://api.thecatapi.com/v1/breeds`);
        let data = await res.json();
        // console.log(data);
        appendData(data);
    } catch (error) {
        console.log(error);
    }
}

getData();



// get container box from index.html file
let container = document.querySelector("#container");


// create an append function to show the data on to the dom

function appendData (arr) {

    container.innerHTML = "";

    arr.forEach((el) => {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg";

        let breed_name = document.createElement("h2");
        breed_name.innerText = el.name;

        let description = document.createElement("p");
        description.innerText = el.description;

        let origin = document.createElement("p");
        origin.innerText = `Origin : ${el.origin}`;

        let life_span = document.createElement("p");
        life_span.innerText = `Life Span : ${el.life_span}`;

        let temperament = document.createElement("div");
        let st = el.temperament;
        let ans = st.split(' ');

        for(let i=0; i<ans.length; i++){
            let button = document.createElement("button");
            button.innerText = ans[i];

            temperament.append(button);
        }

        let wiki_div = document.createElement("div");
        wiki_div.innerText = "Read More : ";

        let wiki_url = document.createElement("a");
        // wiki_url.setAttribute(href, `Read More : ${el.wikipedia_url}`);
        wiki_url.href = el.wikipedia_url;
        wiki_url.target = "_blank";
        wiki_url.innerText = "Wikipedia";

        wiki_div.append(wiki_url);

        let view_images = document.createElement("button");
        view_images.innerText = "View Images";

        view_images.addEventListener("click", function () {
            window.location.href = "./cat.html";
        })

        div.append(image, breed_name, description, origin, life_span, temperament, wiki_div, view_images);

        container.append(div);
    })
}

/*
let st = 'All Are Good I Am Very Clever';
let ans = st.split(' ');


let div = document.createElement("div");

for(let i=0; i<ans.length; i++){
    let button = document.createElement("button");
    button.innerText = ans[i];
    
    div.append(button);
}

container.append(div);
*/