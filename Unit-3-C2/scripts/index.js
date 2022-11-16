// Add the coffee to local storage with key "coffee"

let countShow = document.getElementById('coffee_count');
let count = JSON.parse(localStorage.getItem("coffee"));

if(count) {
    countShow.innerText = count.length
}
else{
    countShow.innerText = 0
}


let getData = () => {
    try{
        
        fetch("https://masai-api.herokuapp.com/coffee/menu")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            appendData(data.menu.data)
        })
    }
    catch(err) {
        console.log({error : err});
    }
}

getData();

let appendData = (data) => {
    console.log(data)
    data.map((ele) => {
        let div = document.createElement("div");
        div.className = "coffee"

        let image = document.createElement("img");
        image.src = ele.image;

        let price = document.createElement("h3");
        price.innerText = ele.price;

        let type = document.createElement("h4");
        type.textContent = ele.title;

        let btn = document.createElement("button");
        btn.textContent = "ADD to Bucket";
        btn.id = "add_to_bucket";

        btn.addEventListener("click", function(){
            addToBucket(ele)
        });

        div.append(image,price, type, btn);

        document.getElementById("menu").append(div);
    })
};

let addToBucket = (data) => {
    let arr = JSON.parse(localStorage.getItem("coffee")) || [];

    arr.push(data);
    console.log(arr)

    localStorage.setItem("coffee", JSON.stringify(arr));

    countShow.innerText = JSON.parse(localStorage.getItem("coffee")).length;
}