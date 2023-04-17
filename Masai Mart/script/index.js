// Global Variables
let ProductArry = []

let WishlistData = JSON.parse(localStorage.getItem("wishlist")) || []
productData()

// fetching data from API----------------
async function productData() {
    ProductArry = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);

    ProductArry = await ProductArry.json()
    ProductArry = ProductArry.data
    Display(ProductArry)

    console.log(ProductArry)
}

//Pagination  functionality-----------------------
let pages = 4
let per_page = 12
RenderPagination(pages)


// function---

function RenderPagination(pages, orderBy) {
    let pagination_container = document.getElementById("pagination-container")

    pagination_container.innerHTML = null

    CallingAPI(1, orderBy)
    for (let page = 1; page <= pages; page++) {
        let button = document.createElement("button");
        button.setAttribute("class", "pagination-btn");
        button.innerText = page;
        button.addEventListener("click", function () {
            CallingAPI(page, orderBy);
        })
        pagination_container.append(button);

    }
}

// CallingAPI Function---------to use in Pagination function

async function CallingAPI(page, orderBy) {
    if (orderBy != undefined) {
        data = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&orderBy=${orderBy}`)
    }
    else {
        data = await fetch(
            `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&orderBy=desc`
        );

    }
    data = await data.json();
    pages = data.totalPages;
    data = data.data;
    Display(data)
}












// Rendering Products To DOM--------
function Display(data) {
    let container = document.getElementById("product-container")

    container.innerHTML = null
    

    data.map((el) => {

        let product = document.createElement("div");
        product.setAttribute("class", "product");

        let image = document.createElement("img");
        image.setAttribute("src", el.image);
        image.setAttribute("class", "product-image");

        let product_desc = document.createElement("div");
        product_desc.setAttribute("class", "product-desc");

        let left_container = document.createElement("div")
        left_container.setAttribute("class", "left-container")


        let brand = document.createElement("p");
        brand.setAttribute("class", "brand");
        brand.innerText = el.brand;

        let title = document.createElement("p");
        title.setAttribute("class", "title");
        title.innerText = el.title;

        
        let category = document.createElement("p");
        category.setAttribute("class", "category");
        category.innerText = el.category;


        let price = document.createElement("p");
        price.setAttribute("class", "price");
        price.innerText = `₹ ${el.price} /-`;

        left_container.append(brand, title, price,category);

        let wishlist = document.createElement("img")
        wishlist.setAttribute("src", "https://img.favpng.com/21/23/19/heart-blue-love-emoji-clip-art-png-favpng-Z901uGdvHc6cTh6CBDJXBcNUN.jpg")
        wishlist.setAttribute("class", "wishlist-icon");
        wishlist.addEventListener("click", function () {
            WishlistData.push(el)
            alert("Added to wishlist")
            localStorage.setItem("wishlist", JSON.stringify(WishlistData))
        })
        product_desc.append(left_container, wishlist);
        product.append(image, product_desc);
        container.append(product);

    })
}

// Filter by category functionalit

let filter_category = document.getElementById('filter-category')

filter_category.addEventListener("change",HandleFilter)


function HandleFilter(){
    let cat=filter_category.value
    if(cat=="none"){
        RenderPagination(pages)
    }else{
        let FilteredProduct=ProductArry.filter((el)=>{
            return cat==el.category

        })
        document.getElementById("pagination-container").innerHTML = null;
    Display(FilteredProduct);
    }

}

// sort BY price----------------

let sort_price=document.getElementById("filter-sort")

sort_price.addEventListener("change",SortByPrice)

function SortByPrice(){
    let query =sort_price.value
    console.log(query)

    if(query=="lth"){
        RenderPagination(pages,"asc")
    }
    if(query="htl"){
        RenderPagination(pages,"desc")
    }
}

// document.querySelector("#filter-sort").addEventListener("change", (event) => {
//     sortData();
//   });
//   async function sortData(page = 1) {
//     let order = event.target.value;

//     let res = await fetch(
//       `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}&sort=price&orderBy=${orderBy}`
//     );
//     let data = await res.json();
//     Display(data.data);
//   }


