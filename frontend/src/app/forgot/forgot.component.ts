import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
 loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required])
   
  });
  constructor(private _router:Router,private _user:UserService) { }

  ngOnInit() {
  }
  forgot(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    //console.log(JSON.stringify(this.loginForm.value));
    this._user.forgot(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login']);} ,
      error=>console.error(error)
    )
    }
}
