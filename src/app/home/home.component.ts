import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]= [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods=this.foodService.getAllFoodbySearchTerm(params.searchTerm)
    else if(params.tags)
      this.foods= this.foodService.getAllFoodByTag(params.tags);
    else
    this.foods=foodService.getAll();
    })
   
  }
   
  ngOnInit(): void {
   //getalldata
  }
  
  
}
