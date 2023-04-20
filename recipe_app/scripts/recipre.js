


let getData = async () => {
  let res = await fetch(`https://mock-server-6-6ljm.onrender.com/recipes`);
  let data = await res.json();
  appendData(data);
  console.log(data);
};
getData();

let cartLs = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("home-container");

function appendData(data) {
  data.forEach(function (el, id) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let h2 = document.createElement("h2");
    h2.innerText = el.title;

    let p1 = document.createElement("h2");
    p1.innerText = el.description;

    let p2 = document.createElement("h2");
    p2.innerText = el.category;

    let p3 = document.createElement("h2");
    p3.innerText = el.ingredients;

    let p4 = document.createElement("h2");
    p4.innerText = el.instructions;

    let btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";
    btnEdit.setAttribute("class", "btn");
    btnEdit.style.backgroundColor = "teal";
    btnEdit.style.color = "white";
    btnEdit.addEventListener("click", () => viewEdit(el.id, id));

    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("class", "btn");
    btnDelete.style.backgroundColor = "red";
    btnDelete.style.color = "white";
    btnDelete.addEventListener("click", () => viewDelete(el.id));

    div.append(img, h2, p1, p2,p3,p4, btnEdit, btnDelete);
    container.append(div);
  });
}

// Delete 

function viewDelete(id) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    deleteRoom(id);
  }
}
const deleteRoom = async (id) => {
  const response = await fetch(`https://mock-server-6-6ljm.onrender.com/recipes/${id}`, {
    method: "DELETE",
  });
  await response.json();
  window.location.reload();
  getData(response);
};

// add data 

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
  .catch(error => console.log(error));
}


// edit

const editRecipeModal = document.getElementById("edit-recipe-modal");
const editRecipeForm = document.getElementById("edit-recipe-form");
const editRecipeTitle = document.getElementById("edit-recipe-title");
const editRecipeImage = document.getElementById("edit-recipe-image");
const editRecipeDescription = document.getElementById("edit-recipe-description");
const editRecipeCategory = document.getElementById("edit-recipe-category");
const editRecipeIngredients = document.getElementById("edit-recipe-ingredients");
const editRecipeInstructions = document.getElementById("edit-recipe-instructions");

// Display the edit recipe modal
function viewEdit(id, index) {
  // Get the recipe data from the JSON server using a GET request
  fetch(`https://mock-server-6-6ljm.onrender.com/recipes/${id}`)
    .then((response) => response.json())
    .then((recipe) => {
      // Populate the form fields with the recipe data
      editRecipeTitle.value = recipe.title;
      editRecipeImage.value = recipe.image;
      editRecipeDescription.value = recipe.description
      editRecipeCategory.value = recipe.category;
      editRecipeIngredients.value = recipe.ingredients.join("\n");
      editRecipeInstructions.value = recipe.instructions;

      // Display the edit recipe modal
      editRecipeModal.style.display = "block";

      // When the user submits the edit recipe form
      editRecipeForm.onsubmit = (event) => {
        event.preventDefault();

        // Get the updated recipe data from the form fields
        const updatedRecipe = {
          title: editRecipeTitle.value,
          image: editRecipeImage.value,
          description: editRecipeDescription.value,
          category: editRecipeCategory.value,
          ingredients: editRecipeIngredients.value.split("\n"),
          instructions: editRecipeInstructions.value,
        };

        // Send a PUT request to the JSON server with the updated recipe data
        fetch(`https://mock-server-6-6ljm.onrender.com/recipes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRecipe),
        })
          .then((response) => response.json())
          .then((data) => {
            // Update the recipe data in the UI
            const recipeDiv = container.children[index];
            recipeDiv.children[0].src = updatedRecipe.image;
            recipeDiv.children[1].innerText = updatedRecipe.title;
            recipeDiv.children[2].innerText = updatedRecipe.description;
            recipeDiv.children[3].innerText = updatedRecipe.category;
            recipeDiv.children[4].innerText = updatedRecipe.ingredients;
            recipeDiv.children[5].innerText = updatedRecipe.instructions;

            // Hide the edit recipe modal
            // const closeModal = document.createElement('span');
            // closeModal.classList.add('close');
            // closeModal.innerHTML = '&times;';
            // closeModal.addEventListener('click', () => {
            //   editRecipeModal.style.display = 'none';
            // });
            editRecipeModal.style.display = "none";
          })
          .catch((error) => {
            console.log(error);
          });
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

