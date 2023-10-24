import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // private apiUrl = 'http://localhost:3000/categories'; // Replace with your API URL

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.BaseApiUrl}/categories`);
  }
}
