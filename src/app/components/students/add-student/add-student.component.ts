import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  addForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    age: new FormControl(''),
    career: new FormControl('')
  });

  constructor(private studentServiice: StudentsService, private router:Router) { }

  ngOnInit(){
  }

  onSubmit(){
    let newStudent: Student= {
      firstName : this.addForm.get('firstName').value,
      lastName : this.addForm.get('lastName').value,
      userName : this.addForm.get('userName').value,
      age : Number(this.addForm.get('age').value),
      career : this.addForm.get('career').value,
    }

    this.studentServiice.saveStudent(newStudent).toPromise().then(() => {
      this.router.navigate(['/students']);
    });

  }

}
