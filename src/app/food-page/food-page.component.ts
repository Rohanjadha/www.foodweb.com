import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  
  food!:Foods


  constructor(private Route:ActivatedRoute, private FoodService:FoodService,private cartServ:CartService,private router:Router){
    Route.params.subscribe((params)=>{
      if(params['id'])
      this.food=FoodService.getFoodById(params['id'])
    })
  }
  addToCart(){
    this.cartServ.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
 
 
  ngOnInit(): void {
    
  }

}
