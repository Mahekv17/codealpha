// Function to add a new recipe from the form in add.html
function addRecipeFromForm() {
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (recipeName && ingredients && instructions) {
        addRecipe(recipeName, ingredients, instructions);

        // Clear input fields
        document.getElementById('recipeName').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('instructions').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}
