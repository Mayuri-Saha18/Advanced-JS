let productCont=document.getElementById("cart-container")
let cartData=JSON.parse(localStorage.getItem("cart")) || []

let totalprice=0

// function fetchData(id) {
//     fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
//       .then((res) => res.json())
//       .then((res) => {
//         let data = [res];
//         display(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

function display(data){

    productCont.innerText=null
    totalprice=0

    data.map(function (el){
        console.log(el)
        totalprice+=el.price
        
        let product=document.createElement("div")
        product.setAttribute("class","product");
        

        let photo=document.createElement("img")
        photo.setAttribute("src",el.image)
        photo.setAttribute("class","product-image")

        let product_desc=document.createElement("div")
        product_desc.setAttribute("class","product_desc")

        let left_container=document.createElement("div")
        left_container.setAttribute("class","left_container")

        let brand=document.createElement("p")
        brand.setAttribute("class","brand")
        brand.innerText=el.brand

        let title=document.createElement("p")
        title.setAttribute("class","title")
        title.innerText=el.title

        let category=document.createElement("p")
        category.setAttribute("class","category")
        category.innerText=el.category

        let price=document.createElement("p")
        price.setAttribute("class","price")
        price.innerText=el.price

        left_container.append(brand,title,category,price)
        product_desc.append(left_container)
        product.append(photo,product_desc)
        productCont.append(product)
    })
    console.log(totalprice)
    document.getElementById("cart-total").innerText=totalprice
}
display(cartData)
// cartData.forEach((id) => {
//     fetchData(id);
//   });
