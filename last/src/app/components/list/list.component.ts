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
 Employee2:any = [];
 Employee4:any = [];
 submitted = false;
   employeeForm: FormGroup;
  constructor(  public fb: FormBuilder,private ngZone: NgZone,private apiService:ApiService, private router: Router) {this.mainForm(); }

     ngOnInit() { 
this.readEmployee();

     }
      mainForm() {
    this.employeeForm = this.fb.group({
     name: [''],
     question:[''],
     st2: [''],
     Options: [''],
      designation: ['']
    })
  }
  read(){
  this.apiService.read().subscribe(
  data => {
    this.Employee2=data;
  },
  error=>{
  console.log(error);
  }
  )
  }
  read1(data){
    
    this.apiService.read1(this.employeeForm.value).subscribe(
    data => {
          console.log(data)
          console.log('Employee successfully created!')
          this.Employee4=data;
   }       ,
  error=>{
  console.log(error);
  }
      //  this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        )
     
    } 
   
 /* this.apiService.read1(data).subscribe(
        (res) => {
          console.log(res)
          console.log('Employee successfully created!')
      //  this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
     */
  

get myForm(){
    return this.employeeForm.controls;
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

    this.read();
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
          this.Employee1=res;
         // this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
}
}
}

