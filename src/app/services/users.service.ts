import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3002/users';

  constructor(private http: HttpClient) {}

  signup(user: Users): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
