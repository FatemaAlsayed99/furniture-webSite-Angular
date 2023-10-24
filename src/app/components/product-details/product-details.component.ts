import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { Location } from '@angular/common'
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct|undefined=undefined;
prdID:number=0;
productsIDSList:number[]=[];
currentPrdIndex:number=0;
constructor(private prdService:ProductsService,private activatedRoute:ActivatedRoute,private router:Router,private location:Location,private prdWithApi:ProductsWithApiService) {}
ngOnInit(): void {
  

this.productsIDSList=this.prdService.prdsID();

this.activatedRoute.paramMap.subscribe(paramMap=>{
this.prdID=(paramMap.get('pId'))?Number(paramMap.get('pId')):0;
// let x=this.prdService.getPrdByID(this.prdID);
let x=this.prdWithApi.getPrdbyID(this.prdID).subscribe(
  data=>{
    this.product=data;
    console.log(this.product);
  }
)
// if(x){
//   this.product=x;

// }
// else{
//   alert("Not Found Product");
//   this.location.back();
// }
})

}
goBack(){
this.router.navigate(['/Products']);
}

previous(){
this.currentPrdIndex=this.productsIDSList.indexOf(this.prdID);
this.router.navigate(['/prdDetails',this.productsIDSList[--this.currentPrdIndex]])
}
next(){
  this.currentPrdIndex=this.productsIDSList.indexOf(this.prdID);
this.router.navigate(['/prdDetails',this.productsIDSList[++this.currentPrdIndex]])
}

}
