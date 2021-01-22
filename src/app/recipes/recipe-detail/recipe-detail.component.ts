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

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingredients = this.recipe.ingredients;
    console.log('--------')
    console.log(ingredients);
    for (let ingredient of ingredients){
      console.log(ingredient);
      this.slService.addIngredient(ingredient)
    }
  }

}
