import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName',{static:false}) nameRef! : ElementRef
  @ViewChild('inputAmount',{static:false}) amountRef! : ElementRef
  inputNameValue! : string
  inputAmountValue! : number
  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit(): void {
  }
  onClickAdd(){
    this.inputNameValue = this.nameRef.nativeElement.value;
    this.inputAmountValue = this.amountRef.nativeElement.value;
    const ingInstance = new Ingredients(this.inputNameValue,this.inputAmountValue);
    this.shoppinglistService.addIngredients(ingInstance);
  }

}
