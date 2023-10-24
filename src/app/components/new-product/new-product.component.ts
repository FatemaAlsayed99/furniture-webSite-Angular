import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  prdID: number = 0;
  newProduct: IProduct = {} as IProduct;
  product: IProduct | undefined;

  constructor(
    private productApiService: ProductsWithApiService,
    private router: Router,
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.prdID = paramMap.get('productID') ? Number(paramMap.get('productID')) : 0;
      if (this.prdID !== 0) {
        this.productApiService.getPrdbyID(this.prdID).subscribe(
          data => {
            this.product = data;
          },
          error => {
            console.error('Error loading product:', error);
          }
        );
      }
    });
  }

  addNewProduct() {
    if (this.prdID === 0) {
      this.productApiService.addProduct(this.newProduct).subscribe({
        next: () => {
          console.log('Product added successfully.', this.newProduct);
          this.router.navigate(['/Products']);
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      });
    } else {
      this.productApiService.editProduct( this.product!).subscribe({
        next: () => {
          console.log('Product updated successfully.', this.product);
          this.router.navigate(['admin/insertproduct']);
        },
        error: (error) => {
          console.error('Error updating product:', error);
        }
      });
    }
  }
}