// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



let data = JSON.parse(localStorage.getItem("movie"));
console.log(data);

let appendData = (ele) => {
    let title = document.createElement("h2");
    title.innerText = ele.Title;

    let poster = document.createElement("img");
    poster.src = ele.Poster;

    let year = document.createElement("h3");
    year.textContent = ele.Year

    document.getElementById("movie").append(poster, title, year);
};

appendData(data);

let showWallet = () => {
    let wallet = JSON.parse(localStorage.getItem("amount")) || 0;
    document.getElementById("wallet").textContent = wallet;
}
showWallet()

// console.log(typeof(wallet));

let submit = document.getElementById("confirm");
submit.addEventListener("submit", (event) => {
    event.preventDefault();

    let wallet = JSON.parse(localStorage.getItem("amount"))
    
    let numOfSeats = document.getElementById("number_of_seats").value;

    let total = +numOfSeats * 100;
    console.log(wallet, total);

    if(wallet >= total) {
        wallet = wallet - total;

        localStorage.setItem("amount", JSON.stringify(wallet));

        alert("Booking successful!")
        showWallet();
    }
    else {
        alert("Insufficient Balance!")
    }
});