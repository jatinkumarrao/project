import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{HeroService} from '../../shared/hero.service';
import{Hero} from '../../hero';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
private hero:Hero;
private heroes:Hero[];
  constructor(private router:Router, private heroService:HeroService) { }

  ngOnInit() {
  	 this.hero= this.heroService.getter();
  }
createOrUpdate(){
 if(this.hero._id==undefined){
	this.heroService.createHero(this.hero).subscribe(
     data=>{

          console.log(data);
          this.router.navigate(['/']);
     },
     error=>{
     console.log(error);
     }


	)
}
else{
	this.heroService.updateHero(this.hero).subscribe(
     data=>{

          console.log(data);
          this.router.navigate(['/']);
     },
     error=>{
     console.log(error);
     }


	)
}
}
doDelete(hero){
	this.heroService.deleteHero(hero._id).subscribe(
	data=>{
		this.router.navigate(['/']);
	this.heroes.splice(this.heroes.indexOf(hero),1);
	
	},
	 error=>{

  }
  )
}
}

