import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Pizza",
            "Pizza is not Goood for Health",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=768:*",
            [
                new Ingredients("Maidha", 5),
                new Ingredients("Tomatoes", 10),
                new Ingredients("Pepper", 12),
                new Ingredients("CorianderLeaves", 24),

            ]),
        new Recipe("Burger",
            "Burger is also not Good for Health",
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
            [
                new Ingredients("Buns", 2),
                new Ingredients("Cheez", 3),

            ]),
        new Recipe("Dosa",
            "Dosa is my favorite Foood..!",
            "https://www.thespruceeats.com/thmb/gwpiDc5y98oumhsMNd2hw7zYn3o=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-dosa-1957716-Hero-5b59e84346e0fb0071e637c5.jpg",
            [
                new Ingredients("Rice_powder", 2),
                new Ingredients("Chutney", 1)
            ])
    ];
    constructor(private shoppinglistService: ShoppingListService) { }
    getRecipe() {
        return this.recipes.slice();
    }
    addShoppingList(ingredients: Ingredients[]) {
        this.shoppinglistService.addIngredientToShoppingList(ingredients)
    }
    getRecipes(index: number) {
        return this.recipes[index];
    }

}