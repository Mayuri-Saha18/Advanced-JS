


let box = document.querySelector("#favourite-container");

let imageArr = JSON.parse(localStorage.getItem("catImageArray")) || [];

appendImages(imageArr);

function appendImages (imageArr) {

    box.innerHTML = "";
    
    for(let i=0; i<imageArr.length; i++){

        // console.log(arr[i]);

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = imageArr[i];

        let button = document.createElement("button");
        button.innerText = "Remove";

        button.addEventListener("click", function () {
            alert("Image Remove from Favourites");
            removeImage(imageArr.indexOf(imageArr[i]));
        })
        
        div.append(image, button);

        box.append(div);
    }
}


function removeImage(index) {
    imageArr.splice(index,1);
    localStorage.setItem("catImageArray", JSON.stringify(imageArr));
    window.location.reload();
}