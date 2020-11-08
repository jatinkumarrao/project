import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 baseUri:string = 'http://localhost:4000';
 headers:  {'Content-Type': 'application/json', 
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET'} 
  constructor(private http: HttpClient) { }
   getEmployees() {
    return this.http.get(`${this.baseUri}`);
  }
  createEmployee(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
    read1(data): Observable<any> {
    let url = `${this.baseUri}/read1`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
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
 deleteEmployee(name): Observable<any> {
    let url = `${this.baseUri}/delete/${name}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  read(){
    return this.http.get(`${this.baseUri}/read`);
  }
  loadData1(){
    return this.http.get(`${this.baseUri}/get`);
  }
   loadData(){
    return this.http.get(`${this.baseUri}`);
  }

}
