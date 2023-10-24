import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
  http = {};

  constructor(private httpClient:HttpClient) {
    this.http = {
      headers: new Headers({'Content-Type': 'application/json'}),
    };
   }

  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiUrl}/products`);
  }

  getPrdbyID(prdID:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.BaseApiUrl}/products/${prdID}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(`${environment.BaseApiUrl}/products`,JSON.stringify(product),this.http);
  }

  // updateProduct(prdID: number, product: IProduct): Observable<IProduct> {
  //   return this.httpClient.put<IProduct>(`${environment.BaseApiUrl}/products/${prdID}`, JSON.stringify(product), this.http);
  // }
  editProduct(product: IProduct){

    return this.httpClient.patch<IProduct>(
      `${environment.BaseApiUrl}/products/${product.id}`,
      JSON.stringify(product), this.http
    );
  }

  deleteProduct(product: IProduct): Observable<IProduct> {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (!confirmation) {
      return new Observable();
    }
    return this.httpClient.delete<IProduct>(`${environment.BaseApiUrl}/products/${product.id}`);
  }
  
}

