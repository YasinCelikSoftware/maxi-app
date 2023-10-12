import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://picsum.photos/200'
    ),
    new Recipe(
      'Second Test Recipe',
      'Second test description',
      'https://picsum.photos/200'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

 

  onRecipeLoaded(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
