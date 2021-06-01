import { Ingredients } from 'src/app/shared/ingredients.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {
  ingredients! : Ingredients[] ;  
  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.itemAdded
      .subscribe(
        (data: Ingredients[]) => {
          this.ingredients = data;
        }
      );
  }
  
}
