// Sample recipes for initial display
var recipes = [
    { name: 'Pasta Carbonara', ingredients: 'Pasta, Eggs, Bacon, Parmesan Cheese', instructions: 'Cook pasta. Fry bacon. Mix eggs and cheese. Combine all.' },
    { name: 'Chocolate Cake', ingredients: 'Flour, Sugar, Cocoa Powder, Eggs, Milk', instructions: 'Mix dry ingredients. Add wet ingredients. Bake.' },
    // Add more recipes as needed
];

// Function to display recipes
function displayRecipes() {
    var recipesSection = document.getElementById('recipe-list');

    if (recipesSection) {
        recipesSection.innerHTML = '';

        recipes.forEach(recipe => {
            var recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            var nameElement = document.createElement('h2');
            nameElement.textContent = recipe.name;

            var ingredientsElement = document.createElement('p');
            ingredientsElement.textContent = 'Ingredients: ' + recipe.ingredients;

            var instructionsElement = document.createElement('p');
            instructionsElement.textContent = 'Instructions: ' + recipe.instructions;

            recipeCard.appendChild(nameElement);
            recipeCard.appendChild(ingredientsElement);
            recipeCard.appendChild(instructionsElement);

            recipesSection.appendChild(recipeCard);
        });
    } else {
        console.error("Element with id 'recipe-list' not found.");
    }
}

// Function to add a new recipe
function addRecipe(name, ingredients, instructions) {
    var newRecipe = { name, ingredients, instructions };
    recipes.push(newRecipe);
    displayRecipes();
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired.');
    displayRecipes();
    var recipesSection = document.getElementById('recipe-list');
    console.log('recipesSection:', recipesSection);
    // ... rest of your code ...
});
