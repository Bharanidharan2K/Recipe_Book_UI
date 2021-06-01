import { Ingredients } from 'src/app/shared/ingredients.model';
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    itemAdded = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [
        new Ingredients('Tomatoes', 23),
        new Ingredients('Potatoes', 12),
    ]

    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredients(ingredients :Ingredients){
        this.ingredients.push(ingredients);
        this.itemAdded.emit(this.ingredients.slice());
    }

    addIngredientToShoppingList(ingredients :Ingredients[]){
        this.ingredients.push(...ingredients);
        this.itemAdded.emit(this.ingredients.slice());
    }
}