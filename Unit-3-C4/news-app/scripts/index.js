/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


document.getElementById("submit").addEventListener("submit", (event) => {
    console.log("Hello")
    event.preventDefault()
    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;

    console.log(country);

    let obj = {
        name, image, email, country
    };

    localStorage.setItem("user", JSON.stringify(obj))
    console.log(obj);
})