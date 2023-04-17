const container = document.querySelector(".container");

const fetchData = () => {
  fetch("https://mock-api-xfgb.onrender.com/books")
    .then((response) => response.json())
    .then((data) => {
      showData(data);
    })
    .catch((err) => console.log(err));
};

fetchData();

const showData = (data) => {
  let table = document.createElement("table");
  table.style.width = "200%";

  let tr1 = document.createElement("tr");

  let th1 = document.createElement("th");
  th1.innerText = "Book Cover Image";
  let th2 = document.createElement("th");
  th2.innerText = "Name of the book";
  let th3 = document.createElement("th");
  th3.innerText = "Author of the book";
  let th4 = document.createElement("th");
  th4.innerText = "Genre";

  let th5 = document.createElement("th");
  th5.innerText = "Edition";

  let th6 = document.createElement("th");
  th6.innerText = "Publisher";

  let th7 = document.createElement("th");
  th7.innerText = "Cost";

  tr1.append(th1, th2, th3, th4, th5, th6, th7);
  table.append(tr1);

  data.forEach((ele) => {
    let tr2 = document.createElement("tr");

    let image_url = document.createElement("td");
    image_url.innerText = ele.image_url;

    let cover = document.createElement("td");
    cover.innerText = ele.book_name;

    let author = document.createElement("td");
    author.innerText = ele.author;

    let genre = document.createElement("td");
    genre.innerText = ele.genre;

    let edition = document.createElement("td");
    edition.innerText = ele.edition;

    let publisher = document.createElement("td");
    publisher.innerText = ele.publisher;

    let cost = document.createElement("td");
    cost.innerText = ele.cost;

    let dele = document.createElement("td");
    dele.innerText = "Delete";
    dele.addEventListener("click", function () {
      deleteFile(ele.id);
    });

    let updat = document.createElement("td");
    updat.innerText = "Update";

    tr2.append(
      image_url,
      cover,
      author,
      genre,
      edition,
      publisher,
      cost,
      dele,
      updat
    );
    table.append(tr2);

    container.append(table);
  });
};

async function postData() {
  let books = {
    image_url: document.getElementById("image").value,
    id: document.getElementById("id").value,
    book_name: document.getElementById("name").value,
    author: document.getElementById("author").value,
    genre: document.getElementById("genre").value,
    edition: document.getElementById("edition").value,
    publisher: document.getElementById("publiser").value,
    cost: document.getElementById("cost").value,
    borrowed: false,
  };

  console.log(books);

  let res = await fetch("https://mock-api-xfgb.onrender.com/books", {
    method: "POST",
    body: JSON.stringify(books),
    headers: { "Content-Type": "application/json" },
  });

  let result = await res.json();
  showData(result);
  window.location.reload();
}

const deleteFile = async (id) => {
  let res = await fetch(`https://mock-api-xfgb.onrender.com/books/${id}`, {
    method: "DELETE",
  });

  showData(res);
  window.location.reload();
  console.log(id);
};
