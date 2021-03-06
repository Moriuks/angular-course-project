import { RecipeService } from './../../appBAK/recipes/recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private datastorageService:DataStorageService,private recipeService:RecipeService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    const recipes = this.recipeService.getRecipes();

    if(recipes.length === 0){
      return this.datastorageService.fecthRecipes();
    }else{
      return recipes;
    }


  }

}
