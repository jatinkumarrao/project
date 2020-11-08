import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
 import * as XLSX from 'ts-xlsx'; 
 import { Router } from '@angular/router';
 import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
Employee:any = [];
 excel=[];  
form: FormGroup;

 employee:any;
 arrayBuffer;


exceljsondata;
  file;
  alertMessage:string;
  alertMessageType:string;
constructor(private apiService:ApiService,private http: HttpClient, private router: Router){  
     var employeeObject = localStorage.getItem('employee');
    this.employee = JSON.parse(employeeObject);


      this.getJSON().subscribe(data => {  
        data.forEach(row => {  
          this.excel.push(row);
          this.readEmployee();  
        });  
       });  
    }  
      
    exportAsXLSX():void {  
       this.apiService.exportAsExcelFile(this.excel, 'sample');  
    }  
    public getJSON(): Observable<any> {  
      return this.http.get('http://localhost:4000/api');  
    }
    
  ngOnInit() {
    this.readEmployee();
  }

onFileChange(event) {
   if (event.target.files.length > 0) {
    this.file = event.target.files[0];
   }
 }

 Upload() {
      let fileReader = new FileReader();
    fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.exceljsondata = XLSX.utils.sheet_to_json(worksheet,{raw:true});

       console.log(this.exceljsondata);
        this.apiService.importexcel(this.exceljsondata).subscribe(data=>{
        })
    }
    fileReader.readAsArrayBuffer(this.file);
}

 readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    });    
  }

  removeEmployee(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }

}

