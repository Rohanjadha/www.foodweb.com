import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { cartItem } from '../shared/models/cartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private Cart:cart = new cart();
  
  addToCart(food:Foods): void{
      let cartItm= this.Cart.item.find(item=>item.food.id === food.id)
      if(cartItm){
        this.changeQuantity(food.id , cartItm.quantity +1);
        return;
      }
      else{
        this.Cart.item.push(new cartItem(food));   //check whats the problem in these code 
      }
      
  }

  removeFromCart(foodId:number): void{
    this.Cart.item= this.Cart.item.filter(items=>items.food.id !=foodId);
  }
 
  changeQuantity(quantity:number,foodId:number){
     let cartItem=this.Cart.item.find(item=>item.food.id === foodId);
     if(!cartItem) return;
     cartItem.quantity=quantity;
  }

  getCart():cart{
    return this.Cart;
  }
}
