import { Component, OnInit } from '@angular/core';
import { cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { cartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent{
   Cart!:cart;

   constructor(private cartService:CartService, private foodS:FoodService){
    this.setCart()
    let foodies = foodS.getAll();
  }


  setCart(){
    this.Cart=this.cartService.getCart()
  }
  removeCart(cartItem:cartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuanty(cartItm:cartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItm.food.id,quantity);
    this.setCart()
  }
}
