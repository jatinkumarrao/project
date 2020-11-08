import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
Users:any = [];
   
  constructor(private actRoute: ActivatedRoute,private _user:UserService, private _router:Router) { this.read();  }

  ngOnInit() {

  }
read(){
   this._user.admin().subscribe((data) => {
     console.log(data);
     this.Users = data;
    });    
 }
 status(user, index) {
   if(window.confirm('Are you sure?')) {
        this._user.users(user._id).subscribe((data) => {
            console.log(data);this._router.navigateByUrl('/user')},
      error=>console.error(error)
    )
  }
}
}

 