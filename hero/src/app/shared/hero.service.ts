import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Hero} from '../hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
private hero:Hero;
private baseUri:string="http://localhost:3000";
private headers =new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createHero(hero:Hero){
  return this.http.post(this.baseUri+'/create',hero,{headers:this.headers});
  }

  readHero(){
  return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateHero(hero:Hero){
  return this.http.put(this.baseUri+'/update',hero,{headers:this.headers});
  }

  deleteHero(id:string){
  return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }
setter(hero:Hero){
	this.hero=hero;
}
 getter(){
 return this.hero;
 }
}

