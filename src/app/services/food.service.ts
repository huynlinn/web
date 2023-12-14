import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import {Tag} from '../shared/models/tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // static getFoodById // Chuyển tên món ăn thành chữ thường
  //   (id: any): Foods {
  //     throw new Error('Method not implemented.');
  // }

  constructor() { }

  getAll():Foods[]{
    return sample_foods;
  }
  //search food
  getAllFoodbySearchTerm(searchTerm:string){

    // return this.getAll().filter(foods=>foods.name.toLowerCase().includes(searchTerm.toLowerCase()))
    let searchTerms = (searchTerm ?? "").toLowerCase().split(" ");
    return this.getAll().filter(foods => {
        // Chuyển tên món ăn thành chữ thường
        let foodName = foods.name.toLowerCase();
        // Kiểm tra xem tên món ăn có chứa tất cả các từ khóa hay không
        return searchTerms.every(term => foodName.includes(term));
    });
  }
  // getalltag
  getAllTags(): Tag[] {
    return sample_tags;
  }
  //get food by tag
  getAllFoodByTag(tag:string):Foods[]{
    return tag === "All" ?this.getAll() :this.getAll().filter(foods => foods.tags?.includes(tag));
    // return tag.toLowerCase() === "tat ca" ? this.getAll() : this.getAll().filter(food => food.tag?.some(t => t.toLowerCase() === tag.toLowerCase()));
  }
  //get food by id
  getFoodById(foodId:string):Foods{
    return this.getAll().find(foods => foods.id ==foodId)?? new Foods();
  }
 
 
}
