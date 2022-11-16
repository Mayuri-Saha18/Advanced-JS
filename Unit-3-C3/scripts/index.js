// Store the wallet amount to your local storage with key "amount"

document.getElementById("book_movies").addEventListener("click", () => {
    window.location.href = "./movies.html"
});

let wallet = document.getElementById("wallet");
wallet.innerText = JSON.parse(localStorage.getItem("amount")) || 0;

let button = document.getElementById("add_to_wallet");
button.addEventListener("click", () => {
    let input = document.getElementById("amount").value;

    let walletTotal = JSON.parse(localStorage.getItem("amount")) || 0;

    if(input.length != 0) {
        walletTotal += Number(input);
        // console.log((typeof(input)))

        // console.log(walletTotal)
        wallet.innerText = String(walletTotal);

        localStorage.setItem("amount",JSON.stringify( walletTotal));
    }
});