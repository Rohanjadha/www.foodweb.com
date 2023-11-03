import { Component, OnInit } from '@angular/core';
import { cart } from '../shared/models/cart';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  cartItem:any=[]

  constructor(private cartS:CartService){
   this.cartItem=this.cartS.getCart()
  }
  
  ngOnInit(): void {

  }
  

}
