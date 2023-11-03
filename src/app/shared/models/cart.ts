import { cartItem } from "./cartItem";


export class cart{
   item:cartItem[]= [];

   get totalPrice():number{
    let totalPrice= 0;
    this.item.forEach(item => {
       totalPrice  += item.price;
    });
    return totalPrice;
   }
}