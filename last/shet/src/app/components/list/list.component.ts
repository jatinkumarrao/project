import { Component, OnInit,NgZone } from '@angular/core';
import { ApiService } from './../../shared/api.service'; 
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
Employee:any = [];
 Employee1:any = [];
 submitted = false;
   employeeForm: FormGroup;
  constructor(  public fb: FormBuilder,private ngZone: NgZone,private apiService:ApiService, private router: Router) {this.mainForm(); }

     ngOnInit() { 
this.readEmployee();

     }
      mainForm() {
    this.employeeForm = this.fb.group({
     name: [''],
     question: ['']
      //Options: ['']
    })
  }
readEmployee(){
  this.apiService.loadData().subscribe(
  data => {
     this.Employee.push(data);
  },
  error=>{
  console.log(error);
  }
  )
  }
  createEmployee(data){
    this.apiService.createEmployee(data).subscribe(
  data => {
     this.Employee1.push(data);
  },
  error=>{
  console.log(error);
  }
  )
  }
  updateProfile(){
 this.apiService.loadData1().subscribe(
  data => {
     this.Employee1=data;
  },
  error=>{
  console.log(error);
  }
  )
  }
  removeEmployee(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee.name).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }
createOrUpdate(){
  this.submitted = true;
  if(window.confirm('Are you sure?')) {
    
   this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log(res)
          console.log('Employee successfully created!')
         // this.Employee1=res;
          //this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
}
}
}

