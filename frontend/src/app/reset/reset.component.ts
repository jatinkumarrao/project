import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
 resetForm:FormGroup = new FormGroup({
    cpass:new FormControl(null,Validators.required),
     abc:new FormControl(null,Validators.required),
     // asd:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
    
  })
   showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(public activatedRoute: ActivatedRoute,private _router:Router,private _userService:UserService) { }
private abc: string;
  ngOnInit() {
  	  this.activatedRoute.params.forEach((params: Params) => {
      this.abc = params['token'];
     // this.email = params['email']
    });
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
    });
  }
   reset(){
   console.log(JSON.stringify(this.resetForm.value));
   this._userService.reset(this.resetForm.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this._router.navigate(['/login']);
      }, 
      err => {
        if (err) {
          this.serverErrorMessages ='error';
        }
       
      }
    );

}

}


   // if(!this.resetForm.valid){
  //   console.log('Invalid');return;
  //  }

  // console.log(JSON.stringify(this.resetForm.value));
  //  this._userService.reset(JSON.stringify(this.resetForm.value))
  //  .subscribe(
  //    data=>{console.log(data);this._router.navigate(['/login']);} ,
  //    error=>console.error(error)
  //  )
 //   }
//}
