


const makeApiCall = () => {
    console.log("Calling api in progress")
}

let count_the_number_throttling = 0;

function throttling(fn, wait) {
    let lastclall = 0
    // keeping the value in memory
    return function () {
        console.log(count_the_number_throttling++, Date.now() - lastclall)
        // present time, last call was made
        if (Date.now() - lastclall > wait) {
            lastclall = Date.now()
            fn.apply(this, arguments)
        }
    }
}


window.addEventListener('load', function () {
    var btn = document.getElementById("clickMe");
    btn.addEventListener('click', throttling(makeApiCall, 1000))
})