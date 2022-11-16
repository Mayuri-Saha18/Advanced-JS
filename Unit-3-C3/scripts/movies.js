// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet = document.getElementById("wallet");
wallet.innerText = JSON.parse(localStorage.getItem("amount")) || 0;

let getMovie = async () => {
    try {
        let searchFor = document.getElementById("search").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=5ca9f57b&s=${searchFor}`)

        let data = await res.json();

        return data.Search;
    }
    catch(err) {
        console.log({error : err})
    }
}

let appendData = (data) => {

    document.getElementById("movies").innerHTML = "";
    
    data.map((ele) => {
        let div = document.createElement("div");
        div.className = "movie_tab";

        let title = document.createElement("h2");
        title.innerText = ele.Title;

        let poster = document.createElement("img");
        poster.src = ele.Poster;

        let button = document.createElement("button");
        button.innerText = "Book Now"
        button.className = "book_now";
        button.addEventListener("click", () => {
            localStorage.setItem("movie", JSON.stringify(ele));

            window.location.href = "./checkout.html";
        });

        div.append(poster, title, button);
        document.getElementById("movies").append(div);
    })
}

let main = () => {

    getMovie()
    .then((data) => {
        if(data == undefined) {
            return false;
        };

        appendData(data);
        console.log(data)
    })
}

let timer;
document.getElementById("search").addEventListener("input", (ele) => {
    // console.log(ele.target.value)

    if(timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        main();
    }, 200);
});