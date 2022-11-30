let getData=async(url)=>{
    try{
        let res=await fetch(url)
        let data=await res.json()
        console.log(data)
        console.log(data.meals)
        return data;
    }catch(err){
        console.log(error)
    }
}
let display=(data,show)=>{
data.meals.forEach(function(elem){
    let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.strMealThumb;
        let title=document.createElement('h3')
        title.innerText=elem.strMeal;

        div.append(img,title);
        show.append(div)
})
}
export {getData, display};