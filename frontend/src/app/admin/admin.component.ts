import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	username:String='';
    roleForm : FormGroup=new FormGroup({
    role:new FormControl(null,[Validators.required])
   
  });

  constructor(private _router:Router,private _userService:UserService) { 

  
  }
  

  ngOnInit() {
  }
 

  role(){
    if(!this.roleForm.valid){
      console.log('Invalid');return;
    }

    console.log(JSON.stringify(this.roleForm.value));
    this._userService.role(JSON.stringify(this.roleForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login']);} ,
      error=>console.error(error)
    )
    }
}

