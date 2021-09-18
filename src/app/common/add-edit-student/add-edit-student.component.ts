import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StudentFormComponent} from "../student-form/student-form.component";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  @ViewChild('studentFormComponent', {static: false}) studentFormComponent: StudentFormComponent | undefined;
  @Input() student: any;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    console.log('Student:::', this.student);
  }

  saveStudent(){
    if(this.studentFormComponent && typeof this.studentFormComponent.isFormValid == 'function' && this.studentFormComponent.isFormValid){
      console.log(this.studentFormComponent.getValues());
      this.studentService.update(this.student.id, this.studentFormComponent.getValues())
        .then((data: any) => {
          this.closeModal(data);
          console.log('Data: ', data);
        })
        .catch((error: any) => {
          console.log('error:::', error);
        });
    }
  }

  closeModal(value: any){
    console.log('data');
      this.closeDialog.emit(value);
  }


}
