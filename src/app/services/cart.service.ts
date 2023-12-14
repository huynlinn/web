import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/Cartitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();
  private cartSubject:BehaviorSubject<Cart>= new BehaviorSubject(this.cart)
  constructor() { }
    //add to cart method
    addToCart(foods:Foods):void{
      let cartItem=this.cart.items.find(item => item.foods.id===foods.id)
       if(cartItem)
       return;
       this.cart.items.push(new CartItem(foods))
       this.setCartToLocalStorage();
     }
   // remove cart
    removeFromCart(foodId:string):void{
      this.cart.items=this.cart.items.filter(item=> item.foods.id !=foodId)
      this.setCartToLocalStorage();
    }
    //change quantity
    changQuantity(foodId:string,quantity:number){
      let cartItem=this.cart.items.find(item=>item.foods.id===foodId);
      if(!cartItem)
      return;
       cartItem.quantity=quantity;
       cartItem.price=quantity*cartItem.foods.price;
       this.setCartToLocalStorage();

    }
    //clear cart
    clearCart(){
      this.cart=new Cart();
      this.setCartToLocalStorage();

    }
    //get cart check data
    getCartObservable():Observable<Cart>{
      return this.cartSubject.asObservable();
    }
    //now set local data
    private setCartToLocalStorage(){
      this.cart.totalPrice=this.cart.items.reduce((prevSum,currentItem)=>
      prevSum+currentItem.price,0);
      this.cart.totalCount=this.cart.items.reduce((prevSum,currentItem)=>
      prevSum+currentItem.quantity,0)
      
      const cartJson=JSON.stringify(this.cart);
      localStorage.setItem('Cart',cartJson);
      this.cartSubject.next(this.cart)
    }
    //when ever set local data then get data
    private getCartFormLocalStorage():Cart{
      const cartJson=localStorage.getItem('Cart');
      return cartJson?JSON.parse(cartJson):new Cart();
    }
}
