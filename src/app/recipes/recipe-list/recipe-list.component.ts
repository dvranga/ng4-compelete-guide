import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[]=[
    new  Recipe('A Test Recipe', 'This is simply a test ',
    'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg'),
    
    new  Recipe('A chicken Recipe', 'This is simply a test ',
    'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
      this.recipeWasSelected.emit(recipe)
  }

}
