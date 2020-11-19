import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  getStudentObject: Student;
  idParam: number;

  editForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    age: new FormControl(''),
    career: new FormControl('')
  });

  constructor(private studentService: StudentsService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
      this.idParam = Number(this.activatedRoute.snapshot.paramMap.get('studentId'));


      this.studentService.getStudent(Number(this.idParam)).subscribe(data => {
        this.getStudentObject = data;
      
        this.editForm.get('firstName').setValue(this.getStudentObject.firstName);
        this.editForm.get('lastName').setValue(this.getStudentObject.lastName);
        this.editForm.get('userName').setValue(this.getStudentObject.userName);
        this.editForm.get('age').setValue(this.getStudentObject.age);
        this.editForm.get('career').setValue(this.getStudentObject.career);
      });
  }

  updateStudent(){
    let putStudent: Student = {
      studentId: this.idParam,
      firstName: this.editForm.get('firstName').value,
      lastName: this.editForm.get('lastName').value,
      userName: this.editForm.get('userName').value,
      age: Number(this.editForm.get('age').value),
      career: this.editForm.get('career').value
    }

    console.log(putStudent);
    this.studentService.updateStudent(Number(this.idParam), putStudent).toPromise().then(() => {
      this.router.navigate(['/students']);
    });
    
  }

}
