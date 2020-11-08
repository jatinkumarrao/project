import { Component, OnInit } from '@angular/core';

import { FileUploadService } from "../file-upload.service";
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  username:String='';
  preview: string;
  form: FormGroup;
  percentDone: any = 0;
  users = [];
 regForm:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required])
  })
filesToUpload: Array<File> = [];
name: string;
  constructor(
     public fb: FormBuilder,
    public router: Router,
    public fileUploadService: FileUploadService,
   private http: HttpClient,
   private _user:UserService
  ) {
    this.regForm = this.fb.group({
      name: [''],
      id:[''],
      username:['']
    })
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this.router.navigate(['/login'])
    )
  }
   addName(data){
    
    this.username = data;
  }

  ngOnInit() { }
 upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    const name = this.regForm.value;
    
    console.log(files);
//console.log(name);
    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);    
    }
 //formData.append("name", name.name);
   // formData.append("uploads[]", name, name['id']);
 console.log(name)
    const name1=name.id;
    console.log(name1)
   // const name1=name.name;
         formData.append("name", name.name );
         formData.append("username", name.username );
   console.log('form data variable :   '+ formData.toString());
   this.http.post('http://localhost:3000/image/upload/' +name1 ,formData)
      .map(files => files)
       .subscribe(files => console.log('files', files))
}
fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}
}