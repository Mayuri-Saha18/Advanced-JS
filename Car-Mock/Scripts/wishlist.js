let append = document.querySelector(".container");

function fetchData() {
  append.innerText = "isLoading";
  fetch(`https://masai-mock.onrender.com/wishlisted_car`)
    .then((res) => res.json())
    .then((res) => {
      AllData = res;
      displayData(res);
    })
    .catch((err) => {
      append.innerText = "isError";
    });
}

fetchData();

function displayData() {
  append.innerText = null;
  AllData.map((el) => {
    console.log(el);
    let masterBox = document.createElement("div");
    let mainBox = document.createElement("div");
    let Description = document.createElement("p");
    let Price = document.createElement("p");
    let brand = document.createElement("p");
    let id = document.createElement("p");
    let kms = document.createElement("p");
    let type = document.createElement("p");
    let year = document.createElement("p");
    let img = document.createElement("img");
    img.src =
      "https://purepng.com/public/uploads/large/purepng.com-chevrolet-camaro-black-carcarcarsvehiclevehiclestransport-561521126664dkdbq.png";
    Description.innerText = el.Description;
    Description.setAttribute("class", "borderFont");
    Price.innerText = `₹${el.Price.toLocaleString("en-US")}`;

    brand.innerText = el.brand;
    id.innerText = el.id;
    kms.innerText = `${el.kms.toLocaleString("en-US")} km`;
    kms.setAttribute("class", "kms");
    type.innerText = el.type;
    year.innerText = el.year;

    let buttonBox = document.createElement("div");
    buttonBox.setAttribute("class", "icon_box");
    let buttonDelete = document.createElement("i");
    let buttonEdit = document.createElement("i");
    let buttonWishlist = document.createElement("i");

    buttonDelete.setAttribute("class", "fa-solid fa-trash");

    buttonDelete.addEventListener("click", () => {
      deleteData(el);
    });

    buttonEdit.setAttribute("class", "fa-solid fa-pen-to-square");
    buttonWishlist.setAttribute("class", "fa-solid fa-heart");

    buttonWishlist.addEventListener("click", () => {
      addWishlistData(el);
    });
    buttonBox.append(buttonDelete, buttonEdit, buttonWishlist);
    mainBox.append(Description, type, brand, kms, year, Price, buttonBox);
    masterBox.append(img, mainBox);
    append.append(masterBox);
  });
}
