import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUri:string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private _http:HttpClient) { }

  register(body:any){
    return this._http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  login(body:any){
    return this._http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  
    users(body:any){
    return this._http.post('http://127.0.0.1:3000/image/particular-user',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
   role_submit(body:any){
   return this._http.put('http://127.0.0.1:3000/users/update_role',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
 
    roledetail(){
    return this._http.get('http://127.0.0.1:3000/index/roles',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  forgot(body:any){
   return this._http.post('http://127.0.0.1:3000/users/forgot',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
   role(body:any){
   return this._http.post('http://127.0.0.1:3000/index/role',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  reset(body:any){
   return this._http.put('http://127.0.0.1:3000/users/reset',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
edit(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this._http.put(url, data, { headers: this.headers }).pipe(
     
    )
  }
  status(id): Observable<any> {
    let url = `${this.baseUri}/status/${id}`;
    return this._http.put(url, { headers: this.headers }).pipe(
     
    )
  }

   user(){
    return this._http.get('http://127.0.0.1:3000/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
 getUser(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this._http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      
    )
  }
    statusUser(id): Observable<any> {
    let url = `${this.baseUri}/status/${id}`;
    return this._http.put(url, { headers: this.headers }).pipe(

    )
  }
    removeUser(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this._http.delete(url, { headers: this.headers }).pipe(

    )
  }
  admin(){
    return this._http.get('http://127.0.0.1:3000/users/admin',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  logout(){
    return this._http.get('http://127.0.0.1:3000/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
