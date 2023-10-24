import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
// import { ProductCartEvent } from 'src/app/models/product-cart-event';
import { Store } from 'src/app/models/store';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  store1: Store = new Store("homezone",["branch1", "branch2", "branch3"],"assets/furniture.jpg")
  showThanks: boolean = false;
  showLogo: boolean = true;
  clientName: string = 'ali';
  Product: IProduct={} as IProduct

  buy(): void {
    this.showThanks = !this.showThanks;
    this.showLogo = !this.showLogo;
  }
 
  
  
  categoryList: ICategory[];
  // productList:IProduct[]
filteredProducts: IProduct[] = [];
// @Input() set listFilterinChild(selectedCategory: ICategory) {
// // this.filteredProducts = this.ProductsWithSelectedCategory(selectedCategory);
// this.filteredProducts = this.ProductsWithSelectedCategory(selectedCategory);
// }

// ProductsWithSelectedCategory(selectedCategory: ICategory): IProduct[] {
// if (selectedCategory) {
// return this.productList.filter(item => item.CategoryID == selectedCategory.ID);
// } else {
// return this.productList;
// }
// }
//D4
@Input() set listFilterinChild(filterValue: number) {
  this.filteredProducts = this.prdService.performFilter(filterValue);
}

// performFilter(filterValue: number): IProduct[] {
//   if (!filterValue) {
//     return this.productList;
//   }
  
//   return this.productList.filter(item => item.Price >= filterValue );
// }


date1:Date = new Date();
cardNumber:string='1234567891011126';
   constructor(private prdService:ProductsService,private router:Router,private prdApiService:ProductsWithApiService){
    //  this.productList=[
    //   {ID:1,Name:"table1",Quantity:4,Price:1200,Img:"assets/table.jpg",CategoryID:1}
    //   ,{ID:2,Name:"table2",Quantity:1,Price:950,Img:"assets/table.jpg",CategoryID:1},
    //   {ID:3,Name:"table3",Quantity:0,Price:1000,Img:"assets/table.jpg",CategoryID:1},
    //   {ID:4,Name:"tv1",Quantity:1,Price:1200,Img:"assets/tv.jpg",CategoryID:2}
    //   ,{ID:5,Name:"tv2",Quantity:0,Price:950,Img:"assets/tv.jpg",CategoryID:2},
    //   {ID:6,Name:"tv3",Quantity:5,Price:1000,Img:"assets/tv.jpg",CategoryID:2},
    //  ]
     this.categoryList=[
      {ID:1,Name:"table"},{ID:2,Name:"tv unit"}
     ]
   }
   ngOnInit(): void {
    
    // this.filteredProducts=Array.from(this.prdService.getAllProds());
     this.prdApiService.getAllProducts().subscribe(
       data=>{
        this.filteredProducts=data;
      }
     )
  }
  


  numProducts: { [key: string]: number } = {};
  @Output() productCart = new EventEmitter<any>();
  
  buyProduct(item: any) {
    const quantity = this.numProducts[item.Name];
    
    // if (quantity == 0) { 
    //   return  error;
    // }
  
    this.productCart.emit({ item, quantity });
    item.Quantity -= quantity; 
  }

  deletedProduct(item: any) {
    this.prdApiService.deleteProduct(item).subscribe()
    // console.log("Done");

        this.prdApiService.getAllProducts().subscribe(
      data => {
        this.filteredProducts = data
        // console.log("Done");

      }
    );}
  updatedProduct(prdID: number,Product:IProduct) {
   
        this.router.navigate(['admin/insertproduct',prdID]);
  }

//   @Output() productCart = new EventEmitter<any>();
// buyProduct(item: IProduct, quantityInput.value:any) {
//   const parsedQuantity = parseInt(quantityInput.value, 10); 
//   this.productCart.emit({ item, quantity: parsedQuantity });
//   item.Quantity -= parsedQuantity;
// }

// Day5
prdDetails(PrdID:number){
  // console.log(PrdID);
  this.router.navigate(['/prdDetails',PrdID]);
  }
}
