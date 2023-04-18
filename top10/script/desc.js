

const cont= document.getElementById('cont');
const data= JSON.parse(localStorage.getItem('article'));

if(data){
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
    author.innerText = data.author.toUpperCase();

    logodiv.append(logo, author);

    // second div starts here
    const msgdiv = document.createElement('div');
    msgdiv.setAttribute('id', 'msgdiv');
    const msg = document.createElement('h3');
    msg.innerText = data.title;
    msgdiv.append(msg);

    // third div starts here 
    const lstdiv = document.createElement('div');
    lstdiv.setAttribute('id', 'lstdiv');

    const cmntdiv = document.createElement('div');
    cmntdiv.setAttribute('id','cmntdiv')
    const cimg = document.createElement('img');
    cimg.src = 'https://cdn-icons-png.flaticon.com/512/134/134914.png';

    const count = document.createElement('p');
    count.innerText = data.num_comments;
    count.style.color = 'maroon';
    cmntdiv.append(cimg, count);

    // const link = document.createElement('a');
    // link.innerText = 'Go to Article'
    // link.href='./desc.html'
    // link.addEventListener('click',()=>{
    //   saveArticle(el);
    // })
    lstdiv.append(cmntdiv);

    maindiv.append(logodiv, msgdiv, lstdiv);
    cont.append(maindiv);
}