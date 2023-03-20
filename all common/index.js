let data = JSON.parse(localStorage.getItem("data")) || [];
fetch("/db.json")
  .then((res) => res.json())
  .then((res) => {
    // console.log(res)
    localStorage.setItem("data", JSON.stringify(res));
    appendData(res);
  })
  .catch((err) => console.log(err));

// appendData(data);

//  let data= [
//     {
//       "isNew": "true",
//       "company": "Ellette",
//       "postedAt": "2021-03-30",
//       "city": "Gangtok",
//       "location": "American Samoa",
//       "countryCode": "WF",
//       "role": "Frontend",
//       "level": "Junior",
//       "contract": "Full Time",
//       "position": " Backend Developer",
//       "language": "Java"
//     },
//     {
//       "isNew": "false",
//       "company": "Jinny",
//       "postedAt": "2021-09-09",
//       "city": "Ludhiana",
//       "location": "Belgium",
//       "countryCode": "MU",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Full Time",
//       "position": "Junior Frontend Developer",
//       "language": "Java"
//     },
//     {
//       "isNew": "false",
//       "company": "Gale",
//       "postedAt": "2021-10-04",
//       "city": "Port Said",
//       "location": "Tanzania, United Republic of",
//       "countryCode": "BH",
//       "role": "FullStack",
//       "level": "Senior",
//       "contract": "Full Time",
//       "position": " Backend Developer",
//       "language": "Java"
//     },
//     {
//       "isNew": "false",
//       "company": "Amalie",
//       "postedAt": "2021-09-02",
//       "city": "Lomé",
//       "location": "Fiji",
//       "countryCode": "SL",
//       "role": "Frontend",
//       "level": "Senior",
//       "contract": "Full Time",
//       "position": "Junior Frontend Developer",
//       "language": "Javascript"
//     },
//     {
//       "isNew": "true",
//       "company": "Gertrud",
//       "postedAt": "2021-03-15",
//       "city": "Baku",
//       "location": "Fiji",
//       "countryCode": "GI",
//       "role": "Frontend",
//       "level": "Fresher",
//       "contract": "Part Time",
//       "position": "Senior Frontend Developer",
//       "language": "HTML"
//     },
//     {
//       "isNew": "false",
//       "company": "Jenda",
//       "postedAt": "2021-03-25",
//       "city": "Dalian",
//       "location": "Czech Republic",
//       "countryCode": "CV",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Full Time",
//       "position": "Senior Frontend Developer",
//       "language": "Ruby"
//     },
//     {
//       "isNew": "false",
//       "company": "Aryn",
//       "postedAt": "2021-08-24",
//       "city": "Riga",
//       "location": "Nepal",
//       "countryCode": "UA",
//       "role": "Frontend",
//       "level": "Junior",
//       "contract": "Part Time",
//       "position": "Junior Frontend Developer",
//       "language": "Javascript"
//     },
//     {
//       "isNew": "false",
//       "company": "Wendi",
//       "postedAt": "2021-11-19",
//       "city": "Kuala Lumpur",
//       "location": "Trinidad and Tobago",
//       "countryCode": "SK",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Part Time",
//       "position": "Junior Frontend Developer",
//       "language": "Java"
//     },
//     {
//       "isNew": "true",
//       "company": "Gabriellia",
//       "postedAt": "2021-11-12",
//       "city": "Hilo",
//       "location": "Croatia",
//       "countryCode": "IL",
//       "role": "FullStack",
//       "level": "Fresher",
//       "contract": "Full Time",
//       "position": " Backend Developer",
//       "language": "Java"
//     },
//     {
//       "isNew": "true",
//       "company": "Danika",
//       "postedAt": "2021-01-14",
//       "city": "N'Djamena",
//       "location": "Italy",
//       "countryCode": "ID",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Part Time",
//       "position": "Senior Frontend Developer",
//       "language": "Ruby"
//     },
//     {
//       "isNew": "true",
//       "company": "Valera",
//       "postedAt": "2021-02-28",
//       "city": "Rio Branco",
//       "location": "United Kingdom",
//       "countryCode": "IL",
//       "role": "Frontend",
//       "level": "Senior",
//       "contract": "Part Time",
//       "position": "Senior Frontend Developer",
//       "language": "React"
//     },
//     {
//       "isNew": "true",
//       "company": "Teriann",
//       "postedAt": "2021-06-07",
//       "city": "Tampa",
//       "location": "South Africa",
//       "countryCode": "LV",
//       "role": "FullStack",
//       "level": "Senior",
//       "contract": "Part Time",
//       "position": "Junior Frontend Developer",
//       "language": "Ruby"
//     },
//     {
//       "isNew": "false",
//       "company": "Ardeen",
//       "postedAt": "2022-01-03",
//       "city": "Split (city)",
//       "location": "Holy See (Vatican City State)",
//       "countryCode": "GU",
//       "role": "FullStack",
//       "level": "Fresher",
//       "contract": "Part Time",
//       "position": "Software Engineer",
//       "language": "Ruby"
//     },
//     {
//       "isNew": "false",
//       "company": "Mahalia",
//       "postedAt": "2021-11-27",
//       "city": "Ciudad del Este",
//       "location": "Tunisia",
//       "countryCode": "ML",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Full Time",
//       "position": "Software Engineer",
//       "language": "Java"
//     },
//     {
//       "isNew": "true",
//       "company": "Brietta",
//       "postedAt": "2021-11-13",
//       "city": "Ilhéus",
//       "location": "Northern Mariana Islands",
//       "countryCode": "CI",
//       "role": "Frontend",
//       "level": "Junior",
//       "contract": "Part Time",
//       "position": "Junior Frontend Developer",
//       "language": "Ruby"
//     },
//     {
//       "isNew": "true",
//       "company": "Iseabal",
//       "postedAt": "2021-11-17",
//       "city": "Arbil",
//       "location": "Aruba",
//       "countryCode": "IE",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Full Time",
//       "position": "Junior Frontend Developer",
//       "language": "Java"
//     },
//     {
//       "isNew": "false",
//       "company": "Edyth",
//       "postedAt": "2021-09-27",
//       "city": "Minneapolis",
//       "location": "Norfolk Island",
//       "countryCode": "BN",
//       "role": "FullStack",
//       "level": "Fresher",
//       "contract": "Part Time",
//       "position": "Software Engineer",
//       "language": "Javascript"
//     },
//     {
//       "isNew": "false",
//       "company": "Sharlene",
//       "postedAt": "2021-09-12",
//       "city": "Denver",
//       "location": "Saint Lucia",
//       "countryCode": "YE",
//       "role": "Frontend",
//       "level": "Senior",
//       "contract": "Part Time",
//       "position": "Software Engineer",
//       "language": "Java"
//     },
//     {
//       "isNew": "true",
//       "company": "Yvonne",
//       "postedAt": "2021-06-09",
//       "city": "Durban",
//       "location": "Holy See (Vatican City State)",
//       "countryCode": "AM",
//       "role": "FullStack",
//       "level": "Fresher",
//       "contract": "Full Time",
//       "position": "Software Engineer",
//       "language": "Ruby"
//     },
//     {
//       "isNew": "false",
//       "company": "Luci",
//       "postedAt": "2021-09-25",
//       "city": "Chengdu",
//       "location": "Bahrain",
//       "countryCode": "SK",
//       "role": "Frontend",
//       "level": "Fresher",
//       "contract": "Part Time",
//       "position": " Backend Developer",
//       "language": "HTML"
//     },
//     {
//       "isNew": "false",
//       "company": "Sabina",
//       "postedAt": "2021-12-30",
//       "city": "Labasa",
//       "location": "Ethiopia",
//       "countryCode": "RW",
//       "role": "Frontend",
//       "level": "Fresher",
//       "contract": "Full Time",
//       "position": " Backend Developer",
//       "language": "React"
//     },
//     {
//       "isNew": "true",
//       "company": "Lulita",
//       "postedAt": "2021-04-01",
//       "city": "Mumbai",
//       "location": "Solomon Islands",
//       "countryCode": "SG",
//       "role": "FullStack",
//       "level": "Senior",
//       "contract": "Part Time",
//       "position": "Software Engineer",
//       "language": "HTML"
//     },
//     {
//       "isNew": "false",
//       "company": "Kalina",
//       "postedAt": "2022-01-11",
//       "city": "Cebu City",
//       "location": "Guinea-Bissau",
//       "countryCode": "IT",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Full Time",
//       "position": "Junior Frontend Developer",
//       "language": "Ruby"
//     },
//     {
//       "isNew": "false",
//       "company": "Moyna",
//       "postedAt": "2021-02-25",
//       "city": "Kiev",
//       "location": "Benin",
//       "countryCode": "RO",
//       "role": "FullStack",
//       "level": "Junior",
//       "contract": "Part Time",
//       "position": "Senior Frontend Developer",
//       "language": "HTML"
//     },
//     {
//       "isNew": "true",
//       "company": "Michaelina",
//       "postedAt": "2021-06-24",
//       "city": "Wollongong",
//       "location": "Marshall Islands",
//       "countryCode": "TK",
//       "role": "Frontend",
//       "level": "Fresher",
//       "contract": "Part Time",
//       "position": "Software Engineer",
//       "language": "Javascript"
//     },
//     {
//       "isNew": "true",
//       "company": "Shannah",
//       "postedAt": "2021-10-27",
//       "city": "Saint-Pierre",
//       "location": "Slovenia",
//       "countryCode": "BI",
//       "role": "FullStack",
//       "level": "Fresher",
//       "contract": "Part Time",
//       "position": " Backend Developer",
//       "language": "Javascript"
//     }
//   ]
  
  


  //searchBar--> searching functionality
function handleOnSubmit(event) {
  event.preventDefault();
  let text = document.getElementById("search").value;
  // console.log("text",text)
  let query = text.toLowerCase();
  // console.log("query",query)
  let searchData = data.filter((el) => {
    if (el.language.toLowerCase() == query) {
      return el;
    }
  });
  console.log(searchData);
  appendData(searchData);
}


//filtering functionlity
function handleOnChange(event) {
  const { value } = event.target;
  // console.log(value)
  if (value == "All") {
    appendData(data);
  } else {
    let filterData = data.filter((el) => el.role == value);
    appendData(filterData);
  }
}



//pagination
function handleOnChangePage(event) {
  const { value } = event.target;

  if (value == "1") {
    let pageData = data.slice(0, 7);
    appendData(pageData);
  } else if (value == "2") {
    let pageData = data.slice(8, 14);
    appendData(pageData);
  } else if (value == "3") {
    let pageData = data.slice(15, 21);
    appendData(pageData);
  } else if (value == "4") {
    let pageData = data.slice(20);
    appendData(pageData);
  }
}



let container = document.getElementById("container");
function appendData(data) {
  //    console.log("appended data",data)
  container.innerHTML = null;
  data = data.slice(0, 11);
  data.map((el, i) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let leftBox = document.createElement("div");
    leftBox.setAttribute("class", "leftBox");

    let imgBox = document.createElement("div");
    imgBox.setAttribute("class", "imgBox");

    let logo = document.createElement("img");
    logo.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqaLTq6yF9BI_PuXNjxEV8NmmZ9YbwKUoaA&usqp=CAU";
    logo.setAttribute("class", "logo");
    imgBox.append(logo);

    let companyDetails = document.createElement("div");
    companyDetails.setAttribute("class", "companyDetails");

    let company = document.createElement("div");
    company.setAttribute("class", "company");
    company.textContent = el.company;

    let position = document.createElement("div");
    position.setAttribute("class", "position");
    position.textContent = el.position;

    let contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contactDiv");

    let postedAt = document.createElement("div");
    postedAt.setAttribute("class", "postedAt");
    postedAt.textContent = el.postedAt;

    let dot1 = document.createElement("div");
    dot1.setAttribute("class", "dot");
    dot1.textContent = ".";

    let contract = document.createElement("div");
    contract.setAttribute("class", "contract");
    contract.textContent = el.contract;

    let dot2 = document.createElement("div");
    dot2.setAttribute("class", "dot");
    dot2.textContent = ".";

    let location = document.createElement("div");
    location.setAttribute("class", "location");
    location.textContent = el.location;

    contactDiv.append(postedAt, dot1, contract, dot2, location);
    companyDetails.append(company, position, contactDiv);
    leftBox.append(imgBox, companyDetails);

    let rightBox = document.createElement("div");
    rightBox.setAttribute("class", "rightBox");

    let role = document.createElement("div");
    role.setAttribute("class", "role");
    role.textContent = el.role;

    let level = document.createElement("div");
    level.setAttribute("class", "level");
    level.textContent = el.level;

    let language = document.createElement("div");
    language.setAttribute("class", "level");
    language.textContent = el.language;

    rightBox.append(role, level, language);

    box.append(leftBox, rightBox);
    container.append(box);
  });
}
