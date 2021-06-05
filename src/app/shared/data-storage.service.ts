import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

import { RecipeService } from './../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService{
  url = 'https://recipe-book-f6b2e-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient, private recipesService: RecipeService){}

  storeRecipes(){
    const recipes = this.recipesService.getRecipes();

    this.http.put(this.url + 'recipes.json', recipes).subscribe(response =>{
      console.log(response);
    });
  }

  fecthRecipes (){
    return this.http
    .get<Recipe[]>(this.url + 'recipes.json')
    .pipe(
      map(recipes =>{
      return recipes.map(recipe => {
        return {...recipe,ingredients: recipe.ingredients ? recipe.ingredients: []}
      });
    }),
    tap(recipes =>{
      this.recipesService.setRecipes(recipes)
    })
    )
  }


}
