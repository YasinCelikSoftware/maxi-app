import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe Service',
          'This is a simple test',
          'https://picsum.photos/200'
        ),
        new Recipe(
          'Second Test Recipe',
          'Second test description',
          'https://picsum.photos/200'
        ),
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}