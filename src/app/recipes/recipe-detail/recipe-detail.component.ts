import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { RecipeService } from '../recipe.service';
import { Recipe } from './../recipe.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id:number;
  @ViewChild('ingredient') ingredient:Ingredient[];

  constructor(
    private recipeService:RecipeService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    // const id=this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecip(this.id);
      }
    );
  }

  addIngredientToShoppingList(){
    this.recipeService.addIngredientTOShoppingList(this.recipe.ingredients);
  }

}
