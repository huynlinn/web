import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService:FoodService) {
    this.tags = foodService.getAllTags();
   }

  ngOnInit(): void {
  }

}
