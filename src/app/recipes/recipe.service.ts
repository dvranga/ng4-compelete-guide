import { Recipe } from "./recipe.module";
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

   @Output() recipeSelected = new EventEmitter<Recipe>();

   constructor(private shoppingListService:ShoppingListService){

   }

    recipes:Recipe[]=[
        new  Recipe('A Test Recipe',
        'This is simply a test ',
        'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('Fried Rice', 10)
        ]),
        
        new  Recipe(
        'A chicken Recipe', 
        'This is simply a test ',
        'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg',
        [
            new Ingredient('Rice ', 10),
            new Ingredient('Briyani',122)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
    
}