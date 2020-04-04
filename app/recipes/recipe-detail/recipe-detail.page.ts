import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"]
})
export class RecipeDetailPage implements OnInit {
  change;
  loadedRecipe: Recipe;
  constructor(
    private activatedRout: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCntrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRout.paramMap.subscribe(paramMap => {
      if (!paramMap.has("recipeId")) {
        //redirect TO
        this.router.navigate(["/recipes"]);
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
  onDeleteRecipe() {
    this.alertCntrl
      .create({
        header: "Are you sure?",
        message: "Do you really want to delete the recipe?",
        buttons: [
          { text: "cancel", role: "cancel" },
          {
            text: "Delete",
            handler: () => {
              this.recipeService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(["/recipes"]);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
