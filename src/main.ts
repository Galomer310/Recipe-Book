import { RecipeItem } from './model/RecipeItem';
import { RecipeCollection } from './model/RecipeCollection';
import { RecipeTemplate } from './templates/RecipeTemplate';
import "./style.css"

const recipeCollection = new RecipeCollection();
const recipeTemplate = new RecipeTemplate('recipeContainer', recipeCollection);

const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
  const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
  const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;

  const title = titleInput.value;
  const ingredients = ingredientsInput.value.split('\n');
  const instructions = instructionsInput.value;

  const newRecipe = new RecipeItem(title, ingredients, instructions);
  recipeCollection.addRecipe(newRecipe);
  recipeTemplate.render();

  form.reset();
});

const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;
clearButton.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});
