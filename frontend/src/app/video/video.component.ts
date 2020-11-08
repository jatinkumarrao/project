import { Component, OnInit } from '@angular/core';
import { FileUploadService } from "../file-upload.service";
import { UserService } from '../user.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  Users: any = [];
  constructor(
private actRoute: ActivatedRoute,private _router:Router,public fileUploadService: FileUploadService
  	) { 
 }

  ngOnInit() { 
  let id = this.actRoute.snapshot.paramMap.get('id');
       console.log(id);
  this.getUser(id);
  }
   getUser(id){
   this.fileUploadService.getUser(id).subscribe((data) => {
     console.log(data);
     this.Users = data['users'];;
    });    
 }
/** getImages() {
    this.fileUploadService.getImages().subscribe((res) => {
      this.Users = res['users'];
    })
  }
    User_status(user, index) {
   if(window.confirm('Are you sure?')) {
        this.fileUploadService.status(user._id).subscribe((data) => {
            console.log(data);this.router.navigateByUrl('/video')},
      error=>console.error(error)
    )
  }
}**/
}
