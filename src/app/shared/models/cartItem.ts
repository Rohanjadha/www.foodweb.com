import { Foods } from "./food";


export class cartItem{
    static food: any;
  Food: any;

    constructor(food:Foods){
        this.food= food;
        this.price;
    }

    
    food:Foods;
    quantity:number=1;
    get price():number{
    return this.food.price* this.quantity;
    }
}