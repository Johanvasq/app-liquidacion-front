import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeBarComponent } from './welcome-bar/welcome-bar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
//Material
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import { TableEmployeeComponent } from './table-employee/table-employee.component';







@NgModule({
  declarations: [
    NavbarComponent,
    WelcomeBarComponent,
    RegisterFormComponent,
    TableEmployeeComponent,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatTableModule
  ],
  exports: [
    NavbarComponent,
    WelcomeBarComponent,
    RegisterFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    TableEmployeeComponent
  ]
})
export class ComponentsModule { }
