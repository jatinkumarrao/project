import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUri:string = 'http://localhost:3000/users';
  //headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
getUsers() {
    return this.http.get(`${this.baseUri}`);
  }
}
