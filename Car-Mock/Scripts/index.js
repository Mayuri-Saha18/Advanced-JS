let data;

function handleform(e){
    e.preventDefault()
    let form = document.querySelector("form")
    let brand=form.Brand.value;
    let type=form.Type.value;
    let year = form.Year_of_purchase.value;
    let kms= form.km.value;
    let Description = form.Description.value;
    let Price = form.Price.value;
     data={brand,type,year,kms,Description,Price}
     console.log(data)

    
    postData()
}

function postData(){
    fetch("https://masai-mock.onrender.com/cars",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })
    .then((res)=> res.json())
    .then((res)=>{
        window.location.reload()
        console.log(res)
    })
    .catch((err)=> console.log(err))
}


