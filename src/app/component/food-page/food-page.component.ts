import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/shared/models/food';
@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  foods!:Foods;  
  constructor(activatedRoute:ActivatedRoute,private api:FoodService , private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.foods = api.getFoodById(params.id);
    })
  }
    ngOnInit():void{

    }
    //add to cart button
    addToCart(){
      this.cartService.addToCart(this.foods);
      this.router.navigateByUrl('/cart-page')
    }
}
