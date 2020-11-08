import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required),
     phonenumber:new FormControl(null,Validators.required),
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
  })
   showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private _router:Router,private _userService:UserService) { }

  ngOnInit() {
  }
moveToLogin(){
    this._router.navigate(['/login']);
  }
  register(){

this._userService.register(this.registerForm.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this._router.navigate(['/login']);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages ='Duplicate identity';
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );



//    if(!this.registerForm.valid || (this.registerForm.controls.password.value != //this.registerForm.controls.cpass.value)){
  //    console.log('Invalid Form'); return;
 //   }

 //   this._userService.register(JSON.stringify(this.registerForm.value))
 //   .subscribe(
 //     data=> {console.log(data); this._router.navigate(['/login']);},
 //     error=>console.error(error)
 //   )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
