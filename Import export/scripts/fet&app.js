
async function getData(url) {


    try {
        let res = await fetch(url);

        let data = await res.json();

        return data;
    }
    catch (err) {
        console.log('err :>> ', err);
    }


}


function append(data, container) {

    data.forEach(el => {

        let div =document.createElement("div");
        let p =document.createElement("p");
        let img =document.createElement("img");

        p.innerText=el.title;
        img.src=el.image;

        div.append(img,p);

        container.append(div);

    });


}


export { getData, append };