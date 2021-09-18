import { Component, OnInit } from '@angular/core';
import {StudentService} from "../services/student.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddEditStudentComponent} from "../common/add-edit-student/add-edit-student.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: any = [];
  selectedStudent: any;
  showLoader: boolean = true;
  constructor(private studentService: StudentService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.studentService.getStudents()
      .subscribe((data: any) => {
        this.students = data;
        this.showLoader = false;
        console.log(this.students);
      }, (error: any) => {
        this.showLoader = false;
        console.log('Error::::', error);
      })
  }
  editStudent(modal: any, student: any){
  this.selectedStudent = student;
      this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'})
        .result.then((result) => {
              console.log('Result::::', result);
        });
  }

  deleteStudent(modal: any, student: any){
      if(confirm(`Are you sure you want to delete ${student.firstName + ' ' + student.lastName}?`)) {
          this.studentService.deleteStudent(student.id)
            .then((response: any) => {
              alert('Deleted Success!!!');
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            })
      }
  }

  closeDialog(modal: any, data: any){
    modal.dismiss();
    if(typeof data != 'string'){
      alert('edited success!!!');
      //this.modalService.dismissAll();
    }
  }
}
