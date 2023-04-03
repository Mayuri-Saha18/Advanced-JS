// What Is Debouncing?

const makeapicall = () => {
    console.log("api call is progress")
}

let count_number_of_click = 0

const debouncer = (func, delay) => {
    // should remember if the call id called;
    let debouncing;
    return function () {
        console.log(count_number_of_click++)
        debouncing && clearTimeout(debouncing);

        debouncing = setTimeout(() => func.apply(this, arguments), delay)
    }
}


window.addEventListener('load', function () {
    var btn = document.getElementById('clickme')

    const fn = debouncer(makeapicall, 1000)
    btn.addEventListener('click', fn)
})