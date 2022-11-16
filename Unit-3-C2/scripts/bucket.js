// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee")) || [];

let totalAmount = document.getElementById("total_amount");

let container = document.getElementById("bucket");

let appendData = (data) => {
    console.log(data)
    let total = 0;
    data.map((ele,index) => {
        let div = document.createElement("div");
        div.className = "coffee"

        let image = document.createElement("img");
        image.src = ele.image;

        let price = document.createElement("h3");
        price.innerText = ele.price;

        let type = document.createElement("h4");
        type.textContent = ele.title;

        let btn = document.createElement("button");
        btn.textContent = "Remove from Bucket";
        btn.id = "remove_coffee";

        btn.addEventListener("click", function () {
            removeData(ele, index)
        });

        div.append(image, price, type, btn);

        container.append(div);

        total += ele.price;
    })

    totalAmount.innerText = total;
};

appendData(data);


let removeData = (ele, index) => {

    data.splice(index, 1);

    localStorage.setItem("coffee", JSON.stringify(data));
    container.innerHTML = "";
    appendData(data);
}

let checkOutBtn = document.getElementById("confirm_checkout");

checkOutBtn.addEventListener("click", function() {
    window.location.href = "./checkout.html"
})