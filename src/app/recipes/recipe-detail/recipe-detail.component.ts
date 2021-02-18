import { RecipeService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  // another comment to test a bracnh
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingredients = this.recipe.ingredients;
    console.log('--------')
    console.log(ingredients);
    this.recipeService.AddIngredientstoShoppingList(ingredients);

  }

}
