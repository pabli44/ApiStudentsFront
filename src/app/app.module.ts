//modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';

//directives
import { NumerosDirective } from './directives/numeros.directive';
import { AlfabeticoDirective } from './directives/alfabetico.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    NumerosDirective,
    AlfabeticoDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
