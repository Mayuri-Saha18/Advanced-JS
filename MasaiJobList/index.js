         


         const container= document.getElementById('container');


         let dataBase=JSON.parse(localStorage.getItem('jobdata'));



         const fetechData=(dataBase)=>{
            container.innerHTML=null;
            dataBase?.map(el=>{
                let Maindiv = document.createElement("div")
        Maindiv.setAttribute('id','maindiv')

        // logo div created
        let logo = document.createElement('div')
        let img = document.createElement('img')
        img.src = 'https://tse4.mm.bing.net/th?id=OIP.sVVB9SERkuOQQNu3XP2uFAHaJi&pid=Api&P=0';
        logo.append(img);
        logo.setAttribute('id', 'logodiv');

        //  about div creation 
        let about = document.createElement('div');
        about.setAttribute('id', 'aboutdiv');

        let company = document.createElement('p')
        company.innerText = el.company;

        let position = document.createElement('h5')
        position.innerText = el.position;

        let ul = document.createElement('ul');
        ul.setAttribute('id', 'uldiv');

        let li1 = document.createElement('li');
        li1.innerText = el.postedAt;
        let li2 = document.createElement('li');
        li2.innerText = el.contract
        let li3 = document.createElement('li');
        li3.innerText = el.location;
        ul.append(li1, li2, li3);

        about.append(company, position, ul);

        // techStack Div started here

        const techstack= document.createElement('div');
        techstack.setAttribute('id','techstack');
        
        const tech1= document.createElement('div');
        tech1.innerText=el.language;
        const tech2= document.createElement('div');
        tech2.innerText=el.level;
        const tech3= document.createElement('div');
        tech3.innerText=el.role;

        techstack.append(tech1,tech2,tech3);

        Maindiv.append(logo, about,techstack);
        container.append(Maindiv);
            })
         }

         fetechData(dataBase);



         function searchFunction(){
              const inp= document.getElementById('searchf').value;
              const filteredData= dataBase.filter(function(el){
                   return el.language.includes(inp)
              })
              console.log(filteredData)
              fetechData(filteredData);
         }


         function selectFunc(){
            const st= document.getElementById('st').value;
            if(st==='all') fetechData(dataBase);
            else{
            const selectedText= dataBase.filter(function(el){
                return el.role== st
            })
            fetechData(selectedText);
        }
         }