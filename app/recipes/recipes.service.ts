import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
   recipes:Recipe[]=[
    {id:'r1',
   title:'Schnitzel',
   imgUrl:'https://natashaskitchen.com/wp-content/uploads/2018/12/Creamy-Mushroom-Pork-Chops-6-600x900.jpg',
   ingredients:['French fries','Pork Meat','Salad']
 },
 {id:'r2',
   title:'Spaghetti',
   imgUrl:'https://natashaskitchen.com/wp-content/uploads/2014/10/Spaghetti-with-Shrimp-12-230x230.jpg',
   ingredients:['Spaghetti',' Meat','Tomatoes']
 }
  ] 
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
     return {...this.recipes.find(recipe=>{
       return recipe.id===recipeId
     })};
  }

  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(recipe=>{
     return recipe.id !== recipeId
    })
  }
}








