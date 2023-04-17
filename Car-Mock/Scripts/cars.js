var DataArr=[]
let container = document.querySelector(".container")





function fetchData(){
  
    container.innerText = "Loading............."
    fetch(`https://masai-mock.onrender.com/cars`)
    .then((res)=>res.json())
    .then((res)=>{
        DataArr=res;
        displayData(res)
        console.log(res)
    })
    .catch((err)=>{
        container.innerText="isError"
        console.log(err)
    })
}

fetchData()

function displayData(DataArr){
    container.innerText=null;
    if(DataArr?.length==0){
        return (container.innerText="No data Available")
    }
    DataArr.map((el)=>{
        
        let Box = document.createElement("div");
        let mainBox = document.createElement("div")

        let Description=document.createElement("p")
        Description.innerText="Description:" + el.Description;
        Description.setAttribute("class","borderFont")

        let Price = document.createElement("h2")
        Price.innerText = "Price: ₹" + el.Price
        Price.setAttribute("class","price")

        let brand = document.createElement("p")
        brand.innerText="Brand :" + el.brand;
         
        let id=document.createElement("p")
        id.innerText=el.id;

        let kms= document.createElement("p")
         kms.innerText="KMS :" + el.kms;
         kms.setAttribute("class","kms")

        let type= document.createElement("p")
        type.innerText="Type :"+ el.type;

        let year = document.createElement("p")
        year.innerText="Year :" + el.year;

        let img= document.createElement("img")
        img.src="https://purepng.com/public/uploads/large/purepng.com-chevrolet-camaro-black-carcarcarsvehiclevehiclestransport-561521126664dkdbq.png";
        
        let buttonBox = document.createElement("div")
        buttonBox.setAttribute("class","icon_box")

        let DltBtn= document.createElement("i")
        DltBtn.setAttribute("class","fa-solid fa-trash")
        DltBtn.addEventListener("click",()=>{
            deleteData(el)
        });

        let EdtBtn = document.createElement("i")
        EdtBtn.setAttribute("class","fa-solid fa-pen-to-square");
        EdtBtn.addEventListener("click",()=>{
            Price.setAttribute("contenteditable",true);
            Price.focus()
            Price.addEventListener("keydown",(e)=>{
                if(e.keyCode==13){
                    Price.setAttribute("contenteditable",true)
                    let newPrice=Price.innerText;
                    EditData(el,newPrice)
                }
            })
        })

        let wislstBtn = document.createElement("i")
        wislstBtn.setAttribute("class","fa-solid fa-heart");
        wislstBtn.addEventListener("click",()=>{
            WishlistData(el)
        })

        buttonBox.append(DltBtn,EdtBtn,wislstBtn)
        mainBox.append(Description,type,brand,kms,year,Price,buttonBox)
        Box.append(img,mainBox)
        container.append(Box)
    })
}

 function deleteData(el){
    let id=el.id;
    fetch(`https://masai-mock.onrender.com/cars/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
    }).then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        fetchData()
    }).
    catch((err)=> console.log(err))
 }

 function  WishlistData(el){
    fetch("https://masai-mock.onrender.com/wishlisted_car",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(el)
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        alert("car added to wishlist")
    })
    .catch((err)=>{
        console.log(err)
        alert("car is already added in Wishlist")
    })
 }

 function EditData(el,newPrice){
    let id=el.id;
    let Price = "";
    for(let i=0;i<newPrice.length;i++){
        if(newPrice[i] !=="₹" && newPrice[i] !== ","){
            Price += newPrice[i]
        }else{
            alert("Enter a value")
        }
    }
    let data={ Price,}
       
    fetch(`https://masai-mock.onrender.com/cars/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res)
        fetchData()
    })
    .catch((err)=>{
        console.log(err)
    });
 }

 function SortByPrice(e){
    e.preventDefault()
    let SortByPrice=document.querySelector("#sort")
    let value = SortByPrice.value;
    if(value !== "htl"){
        DataArr.sort((a,b)=> a.Price-b.Price)
    } else{
        DataArr.sort((a,b)=>b.Price-a.Price)
    }
    displayData(DataArr)
 }

 function SortByKms(e){
    e.preventDefault()
    let SortByKms=document.querySelector("#SortKms")
    let value = SortByKms.value;
    if(value!=="htl"){
        DataArr.sort((a,b)=>a.kms-b.kms)
    } else{
        DataArr.sort((a,b)=>b.kms-a.kms)
    }
    displayData(DataArr)
 }

 function filterByBrand(e){
    e.preventDefault()
    let SortByBrand = document.querySelector("#brand")
    let value = SortByBrand.value;
    console.log(value);
    let filterData=DataArr.filter((el)=>{
        return el.brand.toLowerCase() == value.toLowerCase()
    })
    displayData(filterData)
 }