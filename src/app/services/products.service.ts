import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;
  productList:IProduct[]

  constructor() { 
    this.productList=[
      {id:1,Name:"table1",Quantity:4,Price:1200,Img:"assets/table.jpg",CategoryID:1,Material:'wood',details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
    }
      ,{id:2,Name:"table2",Quantity:1,Price:950,Img:"assets/table.jpg",CategoryID:1,Material:'wood',details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"},
      {id:3,Name:"table3",Quantity:0,Price:1000,Img:"assets/table.jpg",CategoryID:1,Material:'wood',details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"},
      {id:4,Name:"tv1",Quantity:1,Price:1200,Img:"assets/tv.jpg",CategoryID:2,Material:'wood',details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"}
      ,{id:5,Name:"tv2",Quantity:0,Price:950,Img:"assets/tv.jpg",CategoryID:2,Material:'wood',details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"},
      {id:6,Name:"tv3",Quantity:5,Price:1000,Img:"assets/tv.jpg",CategoryID:2,Material:'wood',details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"},
     ]
  }
  getAllProds():IProduct[] {
    return this.productList;
  }
  performFilter(filterValue: number): IProduct[] {
  if (!filterValue) {
    return this.productList;
  }
  
  return this.productList.filter(item => item.Price >= filterValue );
}
 

getPrdByID(prdID:number):IProduct|undefined{
  return this.productList.find(prd=>prd.id==prdID);
}

prdsID():number[]{
  return this.productList.map(prd=>prd.id)
}
}
