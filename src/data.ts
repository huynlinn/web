import { Foods } from "./app/shared/models/food";
import {Tag } from "./app/shared/models/tag";

export const sample_foods:Foods[]=[
    {
        id:'1',
        name:'Cơm chiên hải sản',
        price:50000,
        star:3.0,
        favorite:false,
        tags:['Com','All'],
        imageUrl: '/assets/anh1.jpeg',
        
       },
       {
        id:'2',
        name:'cơm trộn hàn quốc',
        price:50000,
        star:3.0,
        favorite:false,
        tags:['Com','All'],
        imageUrl: '/assets/anh2.jpeg',
        
       },
       {
        id:'3',
        name:'cơm chiên gà',
        price:55000,
        tags:['Com','All'],
        favorite:false,
        star:3.0,
        imageUrl: '/assets/anh3.jpeg',
        
       },
       {
        id:'4',
        name:'cơm trộn bò',
        price:50000,
        star:3.0,
        favorite:false,
        tags:['Com','All'],
        imageUrl: '/assets/anh4.jpeg',
       
       },
       {
        id:'5',
        name:'cơm trộn hải sản',
        price:55000,
        star:3.0,
        favorite:false,
        tags:['Com','All'],
        imageUrl: '/assets/anh5.jpeg',
        
       },
       {
        id:'6',
        name:'mì xào',
        price:50000,
        star:3.0,
        favorite:false,
        tags:['Mi','All'],
        imageUrl: '/assets/anh6.jpeg',
        
       },
       {
        id:'7',
        name:'mì trộn',
        price:50000,
        star:3.0,
        favorite:false,
        tags:['Mi','All'],
        imageUrl: '/assets/anh7.jpeg',
        
       },
       {
        id:'8',
        name:'mì xào hải sản',
        price:50000,
        star:3.0,
        favorite:false,
        tags:['Mi','All'],
        imageUrl: '/assets/anh6.jpeg',
        
       },
       {
        id:'9',
        name:'mì xào bò',
        price:45000,
        star:3.0,
        favorite:false,
        tags:['Mon them','All'],
        imageUrl: '/assets/anh6.jpeg',
        
       },
       {
        id:'10',
        name:'lẩu',
        price:100000,
        star:3.0,
        favorite:false,
        tags:['Lau','All'],
        imageUrl: '/assets/anh2.jpeg',
       
       },
       {
        id:'11',
        name:'mì xào',
        price:40000,
        star:3.0,
        favorite:false,
        tags:['An vat','All'],
        imageUrl: '/assets/anh6.jpeg',
        
       },
       {
        id:'12',
        name:'gimbap chiên',
        price:30000,
        star:3.0,
        favorite:false,
        tags:['Gimbbap','All'],
        imageUrl: '/assets/anh6.jpeg',
        
       },
       
]
export const sample_tags:Tag[]=[
    {name:"All", count: 12},
    {name:"Com", count:4},
    {name:"Mi", count:2},
    {name:"Lau",count: 1},
    {name:"Gimbap", count:1},
    {name:"Mon them",count:1},

]