import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {
  studentsList: Student[];
  listSize: number;

  constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.studentsList = data;
      this.listSize = this.studentsList.length;
    });
  }

  addStudent(){
    this.router.navigate(['/students/add']);
  }

  editStudent=(stIn:Student)=>{
    this.router.navigate(['/students/edit', stIn.studentId]);
  }

  deleteStudent=(stIn:Student)=>{
    this.studentsList = this.studentsList.filter(st => st.studentId!==stIn.studentId);
    this.listSize = this.studentsList.length;

    this.studentService.deleteStudent(stIn.studentId).subscribe();
  }

}
