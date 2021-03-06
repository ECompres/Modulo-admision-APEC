import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StudentService]
})
export class HomeComponent implements OnInit {

  public students:student[];
  public student:student;
  public confirmPassword: string;
  public p: string;
  constructor(
    private _studentService: StudentService
  ) {
    this.student = new student(0, "", "", "", "", "", "", "", "", "", "", "", "", "", false);
    this.confirmPassword = "";
  }

  
  onSubmit(form){
    this._studentService.saveStudent(this.student).subscribe(
      (res)=>{
        console.log(res);
      },  
      (err)=>{
        console.log(err);
      }
    )
  }
  getStudent(id) {
     this._studentService.getStudent(id).subscribe((res) => {
       if (res.student) {
         this.student = res.student;
         console.log(this.student);
       }
     },
       (err) => {
         console.log(err);
       })
   }
   deleteStudent(id) {
    this._studentService.deleteStudent(id).subscribe((res) => {
      if (res.student) {
        this.student = res.student;
        console.log("Eliminado")
      }
    },
      (err) => {
        console.log(err);
      })
  }
  test() {
    this._studentService.testService();
  }
  ngOnInit() {
    
    this.getStudent(2);
    this._studentService.testService();
  }

}
