import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private firestore: AngularFirestore,

  ) { }

  async add(student: any){
    try{
      await this.firestore.collection('student').add(student);
    }catch (error){
      console.log('Error on add:::', error);
      throwError(error);
    }
  }

  getStudents(){
     return this.firestore
        .collection('student')
        .snapshotChanges()
       .pipe(map((data: any) =>{
        return data.map((e: any) => {
          return {id: e.payload.doc.id, ...e.payload.doc.data()}
       });
     }), catchError((error) => {
       return throwError(error);
     }));
  }

  async deleteStudent(id:string) {
    try{
      return await this.firestore.doc('student/' + id).delete().then();
      // this.toast.openToast('Deleted Successfully!');
    }catch(error){
      console.log('Error on Delete:::', error);
      throwError(error);
      // this.toast.openToast('Failed, Something went wrong!');
    }
  }

  async update(id:string, data: any) {
    try{
      return await this.firestore.doc('student/' + id).update(data).then();
      // this.toast.openToast('Deleted Successfully!');
    }catch(error){
      console.log('Error on Delete:::', error);
      throwError(error);
      // this.toast.openToast('Failed, Something went wrong!');
    }
  }
}
