 import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  baseURL = "http://localhost:3000/image/";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get('http://127.0.0.1:3000/image/',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
   
 // getUsers() {
 //   return this.http.get(this.baseURL)
 // }

  // Create User
  addUser(name: string, profileImage: File): Observable<any> {
    var formData: any = new FormData();
    formData.append("name", name);
    formData.append("avatar", profileImage);

    return this.http.post<User>(`${this.baseURL}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    )
  }

 addVideo(name: string, profileImage: File): Observable<any> {
    var formData: any = new FormData();
    formData.append("name", name);
    formData.append("avatar", profileImage);

    return this.http.post('http://localhost:3000/image/video', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    )
  }
getUser(id): Observable<any> {
    let url = `${this.baseURL}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      
    )
  }

getImages(){
    return this.http.get('http://127.0.0.1:3000/image/all',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

    status(id): Observable<any> {
    let url = `${this.baseURL}/status/${id}`;
    return this.http.put(url, { headers: this.headers }).pipe(
     
    )
  }

  
  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}