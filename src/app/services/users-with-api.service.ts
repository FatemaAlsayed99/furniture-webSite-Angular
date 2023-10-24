import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Iuser } from '../models/iuser';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UsersWithApiService {
  http = {};

  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
  signUpUser(newUser: Iuser): Observable<Iuser> {
    return this.httpClient.post<Iuser>(
      `${environment.BaseApiUrl}/users`,
      JSON.stringify(newUser),this.http
    );
  }

  getAllUsers():Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>(`${environment.BaseApiUrl}/users`);
  }
}
