import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentFormComponent} from "../common/student-form/student-form.component";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('studentFormComponent', {static: false}) studentFormComponent: StudentFormComponent | undefined;
  apiRunning:boolean = false;
  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }
  saveStudent(){
    if(this.studentFormComponent && typeof this.studentFormComponent.isFormValid == 'function' && this.studentFormComponent.isFormValid()){

      this.apiRunning = true;
      console.log(this.studentFormComponent.getValues());
      this.studentService.add(this.studentFormComponent.getValues())
        .then((data: any) => {
          this.apiRunning = false;
          alert('Register successfully!!!');
          console.log('Data: ', data);
          this.studentFormComponent?.resetForm();
        })
        .catch((error: any) => {
          this.apiRunning = false;
          alert('having some issue please try again later!!!  ');
          console.log('error:::', error);
        });
    }
  }
}
