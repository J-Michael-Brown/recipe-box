import { Ingredient } from './ingredient.model';

export class Recipe {

  constructor(public directions: string, public title: string, public ingredients: Ingredient[]) { }
}
