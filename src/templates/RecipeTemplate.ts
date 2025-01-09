import { RecipeCollection } from '../model/RecipeCollection';


export class RecipeTemplate {
  private container: HTMLElement;
  private collection: RecipeCollection;

  constructor(containerId: string, collection: RecipeCollection) {
    this.container = document.getElementById(containerId) as HTMLElement;
    this.collection = collection;
    this.collection.loadFromLocalStorage();
    this.render();
  }

  render(): void {
    this.container.innerHTML = '';
    const recipes = this.collection.getRecipes();

    recipes.forEach((recipe) => {
      const recipeCard = document.createElement('div');
      recipeCard.className = 'recipe-card';
      recipeCard.innerHTML = `
        <h3>${recipe.title}</h3>
        <button class="favorite-btn">${recipe.isFavorite ? 'Unfavorite' : 'Favorite'}</button>
        <button class="delete-btn">Delete</button>
        <p><strong>Ingredients:</strong></p>
        <ul>${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join('')}</ul>
        <p><strong>Instructions:</strong></p>
        <p>${recipe.instructions}</p>
      `;

      recipeCard.querySelector('.favorite-btn')?.addEventListener('click', () => {
        this.collection.toggleFavorite(recipe.id);
        this.render();
      });

      recipeCard.querySelector('.delete-btn')?.addEventListener('click', () => {
        this.collection.removeRecipe(recipe.id);
        this.render();
      });

      this.container.appendChild(recipeCard);
    });
  }
}
