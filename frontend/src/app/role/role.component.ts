import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
	 Users:any = [];
	 role_names:String='';

	   statusForm:FormGroup = new FormGroup({
    _id:new FormControl(null,Validators.required),
    role:new FormControl(null,Validators.required)
  })
  constructor(private actRoute: ActivatedRoute,private _router:Router,private _userService:UserService) {
  this._userService.roledetail()
    .subscribe(
      data=>this.addNames(data),
      error=>console.error(error)
    )
     }

  ngOnInit() {
  	let id = this.actRoute.snapshot.paramMap.get('id');
  	   console.log(id);
  this.getUser(id);
  }
addNames(data){
  console.log(data)
    this.role_names = data;
  }


 getUser(id){
   this._userService.getUser(id).subscribe((data) => {
     console.log(data);
     this.Users = data;
    });    
 }
  role() {
      console.log(JSON.stringify(this.statusForm.value));
      this._userService.role_submit(JSON.stringify(this.statusForm.value)).subscribe(
        data => {
          //  console.log(data);
            this._router.navigateByUrl('/user')},
      error=>console.error(error)
    )
  }
}
