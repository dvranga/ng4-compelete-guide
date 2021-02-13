import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new  Recipe('A Test Recipe', 'This is simply a test ',
    'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg'),
    
    new  Recipe('A Test Recipe', 'This is simply a test ',
    'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
