import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   
  foodS:Foods[]= [];
  
  constructor(private foods:FoodService,private router:ActivatedRoute){}


  ngOnInit(): void {

    this.router.params.subscribe(params=>{
      if(params['searchItem']){
        this.foodS=this.foods.getAll().filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else{
        this.foodS = this.foods.getAll();
      }
    })
    
  }
}
