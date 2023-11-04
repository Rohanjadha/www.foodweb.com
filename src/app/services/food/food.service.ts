import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id == id)!;
    
  }

  getAllbyTag(tag:string): Foods[] {
    return tag=="All" ? 
    this.getAll() :this.getAll().filter(food=>food.tags?.includes(tag)) // heres we can used ternary operator lines with javascript
  }

  getAllTag():Tag[]{
    return[
      {name:'All', count:8},
      {name:'FastFood', count:2},
      {name:'Pizza', count:3},
      {name:'Lunch', count:2},
      {name:'Slowfood', count:1},
      {name:'Hamburger', count:2},
      {name:'Fry', count:5},
      {name:'Soup', count:4},

    ]
  }

  getAll():Foods[]{
    return [
     {
      id:1,
      name:'Hamburger',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['germany','us'],
      stars:4.5,
      imageUrl:'./assets/food-1.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:2,
      name:'Chicken-Tikka',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['germany','us'],
      stars:3.5,
      imageUrl:'./assets/food-2.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:3,
      name:'Pizza',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['England','Malaysia'],
      stars:3.5,
      imageUrl:'./assets/food-3.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:4,
      name:'Noodles',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['germany','us'],
      stars:3.7,
      imageUrl:'./assets/food-4.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:5,
      name:'Biryani',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['India','Norve'],
      stars:4.0,
      imageUrl:'./assets/food-5.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:6,
      name:'Fish',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['germany','us'],
      stars:3.8,
      imageUrl:'./assets/food-6.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:7,
      name:'Pasta',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['Australia','SA'],
      stars:4.9,
      imageUrl:'./assets/food-7.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:8,
      name:'Panner-Tikka',
      price:5,
      cookTime:'10-15',
      favourite:false,
      origins:['germany','us'],
      stars:5.0,
      imageUrl:'./assets/food-8.jpg',
      tags:['FastFood','Hamburger'],
     }
    ];
  }
}
