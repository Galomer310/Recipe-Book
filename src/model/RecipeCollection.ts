import { RecipeItem } from './RecipeItem';

export class RecipeCollection {
  private recipes: RecipeItem[] = [];

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.saveToLocalStorage();
    }
  }

  getRecipes(): RecipeItem[] {
    return this.recipes;
  }

  loadFromLocalStorage(): void {
    const data = localStorage.getItem('recipes');
    if (data) {
      this.recipes = JSON.parse(data);
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }
}
