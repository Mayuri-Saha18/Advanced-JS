// Code that you want to import goes here
let ProductArray=[]
let cartData=JSON.parse(localStorage.getItem("cart")) || []
productData()

async function productData(){
    ProductArray=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    ProductArray=await ProductArray.json()
    ProductArray=ProductArray.data
    DisplayData(ProductArray)
    console.log(ProductArray)
}

function DisplayData(data){
    let container=document.getElementById("product-container")
    container.innerHTML=null
    data.map((el)=>{
        let product=document.createElement("div")
        product.setAttribute("class","product");
        

        let img=document.createElement("img")
        img.setAttribute("src",el.image)
        img.setAttribute("class","product-image")

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

        let button=document.createElement("button")
        button.innerText="Add to cart"
        button.addEventListener("click",function(){
            if(addtoCart(el.title)===true){
            
                cartData.push(el)
                document.getElementById("alert").innerText="Product added to The cart"
                localStorage.setItem("cart",JSON.stringify(cartData))
            }else{
                document.getElementById("alert").innerText="Product already in the cart"
            }
            // cartData.push(el)
            // localStorage.setItem("cart",JSON.stringify(cartData))

            
            // wishData.push(el)
        })

        left_container.append(brand,title,category,price,button)
        product_desc.append(left_container)
        product.append(img,product_desc)
        container.append(product)
    })
}
function  addtoCart(id){
    for(let i=0;i<cartData.length;i++){
        if(cartData[i].title==id){
            return false
        }
    }
    return true
}
// function wishData(el){
//     fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${el.id}`,{
//         method:"POST",
//         hesders:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(el)
//     })
//     .then((res)=>res.json())
//     .then((res)=>{
//         console.log(res)
//         document.getElementById("alert").innerText="Product added to The cart"
//         localStorage.setItem("cart",JSON.stringify(cartData))
//     })
//     .catch((err)=>{
//         console.log(err)
//         document.getElementById("alert").innerText="Product already in the cart"
//     })
// }