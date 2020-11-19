import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, servicesNames } from './../../environments/environment';
import { Student } from '../models/student';


@Injectable({
    providedIn: 'root'
})
export class StudentsService{
    url:string = environment.url;
    private headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    constructor(private http: HttpClient) {

    }

    saveStudent(student: Student) {
        return this.http.post(this.url + servicesNames.students, student, this.headers);
    }

    updateStudent(id: number,student: Student) {
        return this.http.put(this.url + servicesNames.students + "/" +id, student, this.headers);
    }

    deleteStudent(id: any){
        return this.http.delete(this.url + servicesNames.students + "/" +id, this.headers)
    }

    getStudent(id: number): Observable<Student>{
        return this.http.get<Student>(this.url + servicesNames.students + "/" +id, this.headers);
    }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.url + servicesNames.students);
    }
    
}