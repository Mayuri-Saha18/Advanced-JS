

document.querySelector("form").addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();

    const payload = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        month: document.querySelector("#month").value,
        year: document.querySelector("#year").value,
        cvc: document.querySelector("#cvc").value
    }

    let count = 0;
    const { name, number, month, year, cvc } = payload;

    if (payload) {

        if (Number(number) && number.length === 16) {
            console.log(Number(number));
            count++;
        } else {
            alert('please enter valid card number');
        }

        if (Number(month) && Number(month) <= 12) {
            console.log(Number(month));
            count++;
        } else {
            alert('please enter valid month');
        }

        if (Number(year) && Number(year) >= 2023) {
            console.log(Number(year));
            count++;
        } else {
            alert('please enter valid year');
        }

        if (Number(cvc)) {
            console.log(Number(cvc));
            count++;
        } else {
            alert('please enter valid card cvc');
        }

        if (name && number && month && year && cvc && count === 4) {
            alert('card detail successfully verified');
            console.log('payload: ', payload);
            window.location.href = "./otp.html";
        }

    } else {
        alert('wrong credentials');
    }
}




function getName() {
    let name = document.querySelector("#name").value;
    if (name) {
        document.querySelector("#card-holder-name").innerText = name.toUpperCase();
    } else {
        document.querySelector("#card-holder-name").innerText = 'JOHN SMITH';
    }
}

function getNumber() {
    let number = document.querySelector("#number").value;
    if (Number(number)) {
        // let num;
        // for(let i=0; i<number.length; i++){
        //     if ( i === 3 || i === 7 || i === 11 ) {
        //         num = num + number[i] + ' ';
        //     } else {
        //         num = num + number[i];
        //     }
        // }
        document.querySelector("#card-number").innerText = number;
    } else {
        alert('please enter valid card number');
    }
}

let month_year = document.querySelector("#card-month-year");

function getMonth() {
    let month = document.querySelector("#month").value;

    if (Number(month)) {
        month_year.innerText = month;
    } else {
        alert('please enter valid month');
    }
}

function getYear() {
    let year = document.querySelector("#year").value
    let card_year = document.querySelector("#card-year");

    if (Number(year)) {
        card_year.innerText = `/${year}`;
    } else {
        alert('please enter valid year');
    }
}

function getCvc() {
    let card_cvc = document.querySelector("#card-cvc");
    let cvc = document.querySelector("#cvc").value;

    if (Number(cvc)) {
        card_cvc.innerText = cvc;
    } else {
        alert('please enter valid cvc');
    }
}

// let card_number = document.querySelector("#card-number");




// name: document.querySelector("#name").value
// number: document.querySelector("#number").value,
// month: document.querySelector("#month").value,
// year: document.querySelector("#year").value,
// cvc: document.querySelector("#cvc").value
