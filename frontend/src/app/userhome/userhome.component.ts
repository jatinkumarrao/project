import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  username:String='';
  
  Users:any = [];
   
  constructor(private actRoute: ActivatedRoute,private _user:UserService, private _router:Router) { 
  this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data){
    
    this.username = data;
  }
  ngOnInit() {
     this.read();
  }
 read(){
   this._user.admin().subscribe((data) => {
     console.log(data);
     this.Users = data;
    });    
 }
logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }
  User_status(user, index) {
   if(window.confirm('Are you sure?')) {
        this._user.status(user._id).subscribe((data) => {
            console.log(data);this._router.navigateByUrl('/user')},
      error=>console.error(error)
    )
  }
}

 
 
    removeUser(user, index) {
    if(window.confirm('Are you sure?')) {
        this._user.removeUser(user._id).subscribe((data) => {
          this.Users.splice(index, 1);
        }
      )    
    }
  }
}
