import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { Ingredient } from './models/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  recipes: Recipe[] = [
    new Recipe('put potatoes in bowl and mash','mashed potatoes',[new Ingredient('potatoe', 1),new Ingredient('sour cream', 1, 'container'),new Ingredient('mozerella', 8, 'grams'),new Ingredient('salt', 1),new Ingredient('pepper', 1)]),
    new Recipe('put steak in bowl and mash','Fillet Mignon',[new Ingredient('cow', 1),new Ingredient('butcher', 1),new Ingredient('nail gun', 1),new Ingredient('flamethrower', 1),new Ingredient('frenchman', 1)])
  ];

  selectedRecipe: Recipe = null;

  selectedIngredient: string = null;
  selectedIngredientIndex: number = null;


  selectRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  selectIngredient(clickedIngredient, clickedIngredientIndex) {
    this.selectedIngredient = clickedIngredient;
    this.selectedIngredientIndex = clickedIngredientIndex
  }

  finishedEditingIngredient() {
    this.selectedIngredient = null;
    this.selectedIngredientIndex = null;
  }

  finishedEditingRecipe() {
    this.selectedRecipe = null;
    this.selectedIngredient = null;
    this.selectedIngredientIndex = null;
  }
}
