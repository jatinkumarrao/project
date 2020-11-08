import { Component, OnInit, NgZone  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from './../../shared/api.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 submitted = false;
  employeeForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  	) { 
    this.mainForm();
    }

  ngOnInit() {
  }
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      
      class: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

 //  Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
