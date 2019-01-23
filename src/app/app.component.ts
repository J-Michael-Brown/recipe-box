import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  recipes: Recipe[] = [
    new Recipe('put potatoes in bowl and mash','mashed potatoes',['potatoes','butter', 'milk','salt','pepper']),
    new Recipe('put steak in bowl and mash','Fillet Mignon',['cow','butcher','nail gun','flamethrower','frenchman'])
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
