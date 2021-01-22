import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat',1),
        new Ingredient('Corn',5)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('chicken',1),
          new Ingredient('broccolli',4)
        ])
  ];

  constructor(private slService: ShoppingListService){

  }
  getRecipe(){
    return this.recipes.slice();
  }

  AddIngredientstoShoppingList(ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}
