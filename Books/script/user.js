const container = document.querySelector(".container");

const fetchData = () => {
  fetch("https://shy-gray-vulture-cape.cyclic.app/books")
    .then((response) => response.json())
    .then((data) => {
      showData(data);
    })
    .catch((err) => console.log(err));
};

fetchData();

const showData = (data) => {
  data.forEach((ele) => {
    let div1 = document.createElement("div");
    div1.setAttribute("class", "divs");
    let img = document.createElement("img");
    img.src = ele.image_url;

    let div2 = document.createElement("div");
    let book_name = document.createElement("p");
    book_name.style.fontSize = "20px";
    book_name.style.marginTop = "10px";
    book_name.innerText = ele.book_name;
    let author = document.createElement("p");
    author.style.fontSize = "17px";
    author.style.marginTop = "10px";
    author.innerText = "Author : " + ele.author;

    let genre = document.createElement("p");
    genre.innerText = "Genre : " + ele.genre;
    genre.style.fontSize = "17px";
    genre.style.marginTop = "10px";

    let edition = document.createElement("p");
    edition.style.fontSize = "17px";
    edition.style.marginTop = "10px";
    edition.innerText = "Edition : " + ele.edition;

    let publisher = document.createElement("p");
    publisher.style.fontSize = "17px";
    publisher.style.marginTop = "10px";
    publisher.innerText = "Publisher : " + ele.publisher;

    let cost = document.createElement("p");
    cost.style.fontSize = "17px";
    cost.style.marginTop = "10px";
    cost.innerText = "$" + ele.cost;

    let borrow = document.createElement("button");
    borrow.innerText = "Borrow";
    borrow.style.backgroundColor = "lightgreen";
    borrow.style.border = "none";
    borrow.style.cursor = "pointer";
    borrow.style.height = "30px";
    borrow.style.width = "50%";
    borrow.style.marginBottom = "10px";

    borrow.addEventListener("click", function () {
      showModal(ele);
    });

    div2.append(book_name, author, genre, edition, publisher, cost, borrow);
    div1.append(img, div2);
    container.append(div1);
  });
};

let sort = document.getElementById("sort");
sort.addEventListener("change", function () {
  container.innerHTML = "";
  if (sort.value === "asc") {
    fetch("https://mock-api-xfgb.onrender.com/books/?_sort=cost&_order=asc")
      .then((res) => res.json())
      .then((data) => {
        showData(data);
      })
      .catch((err) => console.log(err));
  }

  if (sort.value === "desc") {
    fetch("https://mock-api-xfgb.onrender.com/books/?_sort=cost&_order=desc")
      .then((res) => res.json())
      .then((data) => {
        showData(data);
      })
      .catch((err) => console.log(err));
  }
});

let filter = async () => {
  container.innerHTML = "";
  let filters = document.getElementById("filter").value;
  let res = await fetch(
    `https://mock-api-xfgb.onrender.com/books/?genre=${filters}`
  );
  let data = await res.json();

  if (data.length === 0) {
    let heading = document.createElement("h1");
    heading.innerText = "No Books Found";
    container.append(heading);
  } else {
    showData(data);
  }
};

function showModal(ele) {
  let mainDiv = document.createElement("div");
  mainDiv.style.height = "300px";
  mainDiv.style.width = "450px";
  mainDiv.style.backgroundColor = "gray";
  mainDiv.style.position = "fixed";
  mainDiv.style.left = "650px";
  mainDiv.style.top = "250px";

  let upDiv = document.createElement("div");
  upDiv.style.display = "flex";
  let img = document.createElement("img");
  img.src = ele.image_url;
  img.style.height = "259px";
  let upDiv1 = document.createElement("div");
  upDiv1.style.marginLeft = "10px";
  let book_name = document.createElement("p");
  book_name.style.fontSize = "20px";
  book_name.style.marginTop = "10px";
  book_name.innerText = ele.book_name;
  let author = document.createElement("p");
  author.style.fontSize = "17px";
  author.style.marginTop = "10px";
  author.innerText = "Author : " + ele.author;

  let cost = document.createElement("p");
  cost.style.fontSize = "17px";
  cost.style.marginTop = "10px";
  cost.innerText = "$" + ele.cost;

  let close = document.createElement("button");
  close.innerText = "Close";
  close.style.backgroundColor = "red";
  close.style.border = "none";
  close.style.cursor = "pointer";
  close.style.height = "30px";
  close.style.width = "20%";
  close.style.marginBottom = "10px";
  close.addEventListener("click", function () {
    window.location.reload();
  });

  let confirm = document.createElement("button");
  confirm.innerText = "Confirm";
  confirm.style.backgroundColor = "lightgreen";
  confirm.style.border = "none";
  confirm.style.cursor = "pointer";
  confirm.style.height = "30px";
  confirm.style.width = "25%";
  confirm.style.marginBottom = "10px";
  confirm.style.marginLeft = "10px";

  upDiv1.append(book_name, author, cost, close, confirm);
  upDiv.append(img, upDiv1);
  mainDiv.append(upDiv);
  container.append(mainDiv);
}
