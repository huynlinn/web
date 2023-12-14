import { NumberValueAccessor } from "@angular/forms";



export class Foods{
    id!:string;
    price!:number;
    name!:string;
    tags?:string[]; 
    star!:number;
    favorite!:boolean;
    imageUrl!:string;
}