import { Component, OnInit } from '@angular/core';
import { FileUploadService } from "../file-upload.service";
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
 username:String='';
  Users: any = [];

  constructor(public fileUploadService: FileUploadService,private _user:UserService,public router: Router) {
    this.getUsers();
     this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this.router.navigate(['/login'])
    )
  }

  ngOnInit() { }
addName(data){
    this.username = data;
  }
  getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Users = res['users'];
    })
  }

}
