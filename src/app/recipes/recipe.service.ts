import { Recipe } from "./recipe.module";

export class RecipeService{
    recipes:Recipe[]=[
        new  Recipe('A Test Recipe', 'This is simply a test ',
        'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg'),
        
        new  Recipe('A chicken Recipe', 'This is simply a test ',
        'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg')
      ];

      getRecipe(){
          return this.recipes.slice();
      }
    
}