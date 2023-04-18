

const cont = document.getElementById('cont');


let page = 1;
let data;

async function fetchData(page) {
  try {
    let res = await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${page}`)
    data = await res.json();
    // return data;
    // console.log(data)
    showData(data.data)
  }
  catch (er) {
    console.log(er);
  }

}


 fetchData(page);
// console.log(data.data)


function showData(data) {
  cont.innerHTML = null;
  data?.map(el => {
    const maindiv = document.createElement('div');
    maindiv.setAttribute('id', 'main');

    // first div starts here
    const logodiv = document.createElement('div');
    logodiv.setAttribute('id', 'logodiv');
    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo')

    const image = document.createElement('img');
    image.src = 'https://tse4.mm.bing.net/th?id=OIP.oN0_lh9K2BwBCs5PBvIbEAHaFU&pid=Api&P=0';
    logo.append(image);

    const author = document.createElement('h3');
    author.innerText = el.author.toUpperCase();

    logodiv.append(logo, author);

    // second div starts here
    const msgdiv = document.createElement('div');
    msgdiv.setAttribute('id', 'msgdiv');
    const msg = document.createElement('h3');
    msg.innerText = el.title;
    msgdiv.append(msg);

    // third div starts here 
    const lstdiv = document.createElement('div');
    lstdiv.setAttribute('id', 'lstdiv');

    const cmntdiv = document.createElement('div');
    cmntdiv.setAttribute('id','cmntdiv')
    const cimg = document.createElement('img');
    cimg.src = 'https://cdn-icons-png.flaticon.com/512/134/134914.png';

    const count = document.createElement('p');
    count.innerText = el.num_comments;
    count.style.color = 'maroon';
    cmntdiv.append(cimg, count);

    const link = document.createElement('a');
    link.innerText = 'Go to Article'
    link.href='./desc.html'
    link.addEventListener('click',()=>{
      saveArticle(el);
    })
    lstdiv.append(cmntdiv, link);

    maindiv.append(logodiv, msgdiv, lstdiv);
    cont.append(maindiv);
  })
}

// showData(data.data)

function saveArticle(data){
  console.log(data)
  localStorage.setItem('article',JSON.stringify(data));
}

const top10= document.getElementById('top10');
top10.addEventListener('click',showTop10);
function showTop10(){
  let d= data.data;
  d.sort((a,b)=>b.num_comments-a.num_comments)
  showData(d);
}

const latest10= document.getElementById('latest10');
latest10.addEventListener('click',showLatest10);
function showLatest10(){
  let d= data.data;
  d.sort((a,b)=>b.created_at-a.created_at)
  showData(d);
}


const prev= document.getElementById('prev');
prev.addEventListener('click',()=>{
  changePage(-1);
})

const next= document.getElementById('next');
next.addEventListener('click',()=>{
  changePage(1);
})


async function changePage(p){
  page= page+p;
  // console.log(p)
  if(page<=1){
    return;
  }
  //   // console.log(data.total_pages)
  else {
    if(page==data['total_pages']){
    return;
    }
  }
    
  console.log(page)
  let d= fetchData(page);
  console.log('hello',d)
  showData(d.data);
}