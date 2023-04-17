
let getData = async () => {
let res = await fetch(`https://mock-server-6-6ljm.onrender.com/recipes`);
let data = await res.json();
appendData(data)
console.log(data)
}
getData();

let cartLs = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("home-container");

function appendData(data) {

    data.forEach(function(el,id) {
       let div = document.createElement("div");
        
       let img = document.createElement("img");
        img.src = el.image;
        
        let h2 = document.createElement("h2");
        h2.innerText = el.title;

        let p1 = document.createElement("h2");
        p1.innerText = el.description;

        let p2 = document.createElement("h2");
        p2.innerText = el.category;
 

        let btnEdit = document.createElement("button");
        btnEdit.innerText = "Edit";
        btnEdit.setAttribute("class","btn");
        btnEdit.style.backgroundColor = "teal";
        btnEdit.style.color = "white";
        btnEdit.addEventListener("click",viewEdit);
        function viewEdit(el,index) {
            editFunc(el,index)
        }
     
        let btnDelete = document.createElement("button");
        btnDelete.innerText = "Delete";
        btnEdit.setAttribute("class","btn");
        btnDelete.style.backgroundColor = "red";
        btnDelete.style.color = "white";
        btnDelete.addEventListener("click",viewDelete);
        function viewDelete (el) {
            deleteRoom(el.id)
        }
     

      
        div.append(img,h2,p1,p2,btnEdit,btnDelete);
        container.append(div);
    })
}

const deleteRoom = async (id) => {
    const response = await fetch(`https://mock-server-6-6ljm.onrender.com/recipes/${id}`, {
      method: "DELETE",
    });
    await response.json();
    getData(response)
  };



function editFunc() {

}

const recipeForm = document.getElementById('recipe-form');

recipeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
//   const username = getUsername(); // function to get logged in user's username
  const title = recipeForm.title.value;
  const image = recipeForm.image.value;
  const description = recipeForm.description.value;
  const category = recipeForm.category.value;
  const ingredients = recipeForm.ingredients.value.split(',');
  const instructions = recipeForm.instructions.value;
  
  const recipe = {
    title,
    image,
    description,
    category,
    ingredients,
    instructions
  };
  
  addRecipe(recipe);
  recipeForm.reset();
});

function addRecipe(recipe) {
  fetch('https://mock-server-6-6ljm.onrender.com/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}


//  edit

const editRecipeModal = document.getElementById('edit-recipe-modal');
const editRecipeForm = document.getElementById('edit-recipe-form');
const editRecipeTitle = document.getElementById('edit-recipe-title');
const editRecipeImage = document.getElementById('edit-recipe-image');
const editRecipeDescription = document.getElementById('edit-recipe-description');
const editRecipeCategory = document.getElementById('edit-recipe-category');
const editRecipeIngredients = document.getElementById('edit-recipe-ingredients');
const editRecipeInstructions = document.getElementById('edit-recipe-instructions');

// Display the edit recipe modal
function displayEditRecipeModal(recipeId) {
  // Get the recipe data from the JSON server using a GET request
  fetch(`https://mock-server-6-6ljm.onrender.com/recipes/${recipeId}`)
    .then(response => response.json())
    .then(recipe => {
      // Populate the form fields with the recipe data
      editRecipeTitle.value = recipe.title;
      editRecipeImage.value = recipe.image;
      editRecipeDescription.value = recipe.description;
      editRecipeCategory.value = recipe.category;
      editRecipeIngredients.value = recipe.ingredients.join(', ');
      editRecipeInstructions.value = recipe.instructions;
      editRecipeForm.setAttribute('data-id', recipe.id);

      // Show the edit recipe modal
      editRecipeModal.style.display = 'block';
    })
    .catch(error => console.error(error));
}

// Hide the edit recipe modal when the close button is clicked
editRecipeModal.querySelector('.close-button').addEventListener('click', () => {
  editRecipeModal.style.display = 'none';
});

// Update the recipe on the server when the form is submitted
editRecipeForm.addEventListener('submit', event => {
  event.preventDefault();
  
  const recipeId = editRecipeForm.getAttribute('data-id');
  const updatedRecipe = {
    title: editRecipeTitle.value,
    image: editRecipeImage.value,
    description: editRecipeDescription.value,
    category: editRecipeCategory.value,
    ingredients: editRecipeIngredients.value.split(','),
    instructions: editRecipeInstructions.value
  };

  // Send a PUT/PATCH request to update the recipe on the server
  fetch(`https://mock-server-6-6ljm.onrender.com/recipes/${recipeId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedRecipe)
  })
    .then(response => response.json())
    .then(recipe => {
      // Update the recipe card with the updated data
      const recipeCard = document.getElementById(`recipe-${recipe.id}`);
      recipeCard.querySelector('.recipe-title').textContent = recipe.title;
      recipeCard.querySelector('.recipe-image').setAttribute('src', recipe.image);
      recipeCard.querySelector('.recipe-description').textContent = recipe.description;
      recipeCard.querySelector('.recipe-category').textContent = recipe.category;
      recipeCard.querySelector('.recipe-ingredients').textContent = recipe.ingredients.join(', ');
      recipeCard.querySelector('.recipe-instructions').textContent = recipe.instructions;

      // Hide the edit recipe modal
      editRecipeModal.style.display = 'none';
    })
    .catch(error => console.error(error));
});


