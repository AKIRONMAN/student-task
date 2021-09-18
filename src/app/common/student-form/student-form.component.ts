import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  @Input() student: any = {};
  formGroup: FormGroup;
  firstNameField: any;
  lastNameField: any;
  fatherNameField: any;
  emailField: any;
  mobileField: any;
  dateField: any;
  gender: any;
  address: any;
  country: any;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.buildFields();
  }

  buildFields() {
    this.gender = this.student.gender || 'male';
    this.country = this.student.country || '';
    this.address = this.student.address || '';
    this.buildFirstNameField();
    this.buildLastNameField();
    this.buildFatherNameField();
    this.buildEmailField();
    this.buildMobileField();
    this.buildDateField();
  }

  buildDateField(){
    this.dateField = {
      fieldName: 'dob',
      value: this.student.dob || '',
      type: 'date',
      placeholder: 'Enter your Date of birth'
    }
  }

  buildFirstNameField(){
    this.firstNameField = {
      fieldName: 'firstName',
      value: this.student.firstName || '',
      type: 'Text',
      placeholder: 'Enter your first name'
    }
  }

  buildLastNameField(){
    this.lastNameField = {
      fieldName: 'lastName',
      value: this.student.lastName || '',
      type: 'Text',
      placeholder: 'Enter your last name'
    }
  }

  buildFatherNameField(){
    this.fatherNameField = {
      fieldName: 'fatherName',
      value: this.student.fatherName || '',
      type: 'Text',
      placeholder: 'Enter your Father\'s name'
    }
  }

  buildEmailField(){
    this.emailField = {
      fieldName: 'email',
      value: this.student.email || '',
      type: 'Email',
      placeholder: 'Enter your email'
    }
  }

  buildMobileField(){
    this.mobileField = {
      fieldName: 'mobile',
      value: this.student.mobile || '',
      type: 'Mobile',
      placeholder: 'Enter your mobile number'
    }
  }


  // Calling from the parent component
  isFormValid(){
    return this.formGroup.valid && this.gender && this.country;
  }

  // to reset form

  resetForm(){
    this.formGroup.reset();
    this.gender = 'male';
    this.country ='';
    this.address = '';
  }

  getValues(){
    return {...this.formGroup.value, gender: this.gender, country: this.country, address: this.address}
  }

}
