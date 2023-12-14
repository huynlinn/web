import { Foods } from "./food";
export class CartItem{
    static qua: any;
    constructor(public foods:Foods){}
    quantity:number=1;
    price:number=this.foods.price;
}