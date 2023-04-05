



document.querySelector("form").addEventListener("submit", getOTP);


function getOTP (e) {
    e.preventDefault();

    let one = document.querySelector("#one").value;
    let two = document.querySelector("#two").value;
    let three = document.querySelector("#three").value;
    let four = document.querySelector("#four").value;

    if (Number(one) === 1 && Number(two) === 2 && Number(three) === 3 && Number(four) === 4) {
        alert("OTP Verficication Success");
    } else {
        alert("Wrong OTP");
    }
}