
export const sidebar = (container) => {
    
    let data = JSON.parse(localStorage.getItem("user"));

    let img = document.createElement("img");
    let name = document.createElement("h3");
    let email = document.createElement("h4");
    let country = document.createElement("h4");

    img.src = data.image;
    name.textContent = data.name;
    email.textContent = data.email;
    country.textContent = data.country;

    container.append(img, name, email, country);
}