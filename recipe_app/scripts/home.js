const container = document.getElementById('home-container');
const paginate = document.getElementById('buttons');
const searchInput = document.getElementById('search-input');
const filterInput = document.getElementById('filter-input');

let filt;
getData()
async function getData(page_number) {
  const response = await fetch(`https://mock-server-6-6ljm.onrender.com/recipes?_page=${page_number}&_limit=5`);
  const recipes = await response.json();
  filt=recipes
  displayRecipes(recipes)
 console.log(recipes)
}

function displayRecipes(recipes) {
    container.innerHTML = '';
  for (let recipe of recipes) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeCard.appendChild(recipeImage);

    const recipeInfo = document.createElement('div');
    recipeInfo.classList.add('recipe-info');
    recipeCard.appendChild(recipeInfo);

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.title;
    recipeInfo.appendChild(recipeTitle);

    const recipeCategory = document.createElement('p');
    recipeCategory.textContent =`Category : ${recipe.category}`;
    recipeInfo.appendChild(recipeCategory);

    const recipeDescription = document.createElement('p');
    recipeDescription.textContent ="Description : "+ recipe.description;
    recipeInfo.appendChild(recipeDescription);

    const viewRecipeBtn = document.createElement('button');
    viewRecipeBtn.textContent = 'View Recipe';
    viewRecipeBtn.addEventListener('click', () => {
       displayRecipe(recipe);
    // addRecepeModel(recipe)
    });
    recipeCard.appendChild(viewRecipeBtn);

    container.appendChild(recipeCard);
  }
}



function displayRecipe(recipe) {
  const recipeModal = document.createElement('div');
  recipeModal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  recipeModal.appendChild(modalContent);

  const closeModal = document.createElement('span');
  closeModal.classList.add('close');
  closeModal.innerHTML = '&times;';
  closeModal.addEventListener('click', () => {
    recipeModal.style.display = 'none';
  });



modalContent.appendChild(closeModal);


  let recipeTitle = document.createElement('h2');
  recipeTitle.textContent = recipe.title;
  modalContent.appendChild(recipeTitle);

  const recipeImage = document.createElement('img');
  recipeImage.src = recipe.image;
  recipeImage.alt = recipe.title;
  modalContent.appendChild(recipeImage);

  const recipeCategory = document.createElement('p');
  recipeCategory.textContent = `Category: ${recipe.category}`;
  modalContent.appendChild(recipeCategory);

  const recipeDescription = document.createElement('p');
  recipeDescription.textContent = recipe.description;
  modalContent.appendChild(recipeDescription);

  const recipeIngredientsTitle = document.createElement('h3');
  recipeIngredientsTitle.textContent = 'Ingredients';
  modalContent.appendChild(recipeIngredientsTitle);

  let recipeIngredients = document.createElement('p');
  for (let ingredient of recipe.ingredients) {
    const li = document.createElement('li');
    li.textContent = ingredient;
    recipeIngredients.appendChild(li);
  }
  modalContent.appendChild(recipeIngredients);

  let InstructionsTitle = document.createElement('h3');
  InstructionsTitle.textContent = 'Instructions';
  modalContent.appendChild(InstructionsTitle);

  const recipeInstructions = document.createElement('p');
  recipeInstructions.textContent=recipe.instructions

  modalContent.appendChild(recipeInstructions);

  const recipeUser = document.createElement('p');
  recipeUser.textContent = `By ${recipe.username}`;
  modalContent.appendChild(recipeUser);

  document.body.appendChild(recipeModal);


}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = filt.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
  });

  
  filterInput.addEventListener('change', () => {
  const selectedCategory = filterInput.value;
  if(selectedCategory=="Starter" || selectedCategory=="Main Course" || selectedCategory=="Dessert"){
    let filterData=filt.filter(function (el,index){
        return el.category==selectedCategory;
    })
    displayRecipes(filterData)
  }else{
    displayRecipes(filt)
  }
});


const shoeBtn = (results,per_page)=> {
    let button_div = document.getElementById("buttons");
    let buttons = Math.ceil(results/per_page);
    for(let i=1; i<=buttons; i++){
        let button = document.createElement("button");
        button.innerText = i;
        button.onclick = function() {
      getData(i);
        }
       button_div.append(button);
     }
    }
    shoeBtn(5,1);