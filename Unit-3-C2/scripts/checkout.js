
let confirmBtn = document.getElementById("confirm");

let i = 0;

confirmBtn.addEventListener("submit", (ele) => {
    ele.preventDefault();
    showUpdate();
    
})

function showUpdate() {
    let interval = setInterval(() => {
        if (i == 0) {
            alert("Your order is accepted");
        }
        else if (i == 3) {
            alert("Your order is being Prepared")
        }
        else if (i == 8) {
            alert("Your order is being packed")
        }
        else if (i == 10) {
            alert("Your order is out for delivery")
        }
        else if (i == 12) {
            alert("Order delivered");
            clearInterval(interval);
        }

        i++;
    }, 1000);
}