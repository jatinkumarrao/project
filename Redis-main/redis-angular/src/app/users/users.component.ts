import { Component, OnInit } from '@angular/core';
import{ApiService} from "../service/api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
Users:any = [];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
   this.readUsers();
  }
 readUsers(){
    this.apiService.getUsers().subscribe((data) => {
     console.log(data)
      this.Users = data;
    });    
  }

}
