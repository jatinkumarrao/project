import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	 Users:any = [];
  editForm:FormGroup = new FormGroup({
    username:new FormControl(null,Validators.required),
    phonenumber:new FormControl(null,Validators.required),
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
  })
  constructor(  private actRoute: ActivatedRoute,private _router:Router,private _userService:UserService) { }

  ngOnInit() {
  	   let id = this.actRoute.snapshot.paramMap.get('id');
  	   console.log(id);
  this.getUser(id);
  }
  getUser(id){
   this._userService.getUser(id).subscribe((data) => {
     console.log(data);
     this.Users = data;
    });    
 }
 submit(){
    if(!this.editForm.valid ){
     console.log('Invalid Form'); return;
   }
    let id = this.actRoute.snapshot.paramMap.get('id');
   this._userService.edit(id, this.editForm.value)
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
     error=>console.error(error)
   )
    console.log(JSON.stringify(this.editForm.value));
}
}