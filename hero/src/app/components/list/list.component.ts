import { Component, OnInit } from '@angular/core';
import{HeroService} from '../../shared/hero.service';
import{Hero} from '../../hero';
import{Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
private heroes:Hero[];
constructor(private _heroService:HeroService,private router:Router){ }

  ngOnInit() {
  	this.readHero();
  }
 readHero(){
  this._heroService.readHero().subscribe(
  data => {
  console.log(data);
  this.heroes = data['msg'];
  },
  error=>{
  console.log(error);
  }
  )
  }

doUpdate(hero){
  this._heroService.setter(hero);
  this.router.navigate(['/createUpdate']);
}

newCountry(event:any){
  event.preventDefault();
  this._heroService.setter(new Hero());
  this.router.navigate(['/createUpdate']);
  }
}
