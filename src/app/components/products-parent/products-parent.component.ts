import { Component } from '@angular/core';
// import { ICategory } from 'src/app/models/icategory';
// import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss']
})
export class ProductsParentComponent {

  listFilter:number=0;
  cart: any[] = [];
  fun1(event: any){
    const { item, quantity } = event;
    const existItem = this.cart.find((cartItem) => cartItem.Name == item.Name);

    if (existItem) {
      existItem.Count = quantity;
      existItem.Total = existItem.Price * existItem.Count;
    } else {
      const newItem = {Name:item.Name,Price:item.Price, Count: quantity, Total: item.Price * quantity};
      this.cart.push(newItem)
      
      }
  }

  deleteItem(item: any) {
    const index = this.cart.findIndex((cartItem) => cartItem.Name == item.Name);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }  
}
  

  
    

  // ngOnInit() {
  //   this.fun1(addProduct:IProduct);
  // }
