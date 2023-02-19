import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeBarComponent } from './welcome-bar/welcome-bar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
//Material
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import { TableEmployeeComponent } from './table-employee/table-employee.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SalaryHistoryComponent } from './salary-history/salary-history.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';





@NgModule({
  declarations: [
    NavbarComponent,
    WelcomeBarComponent,
    RegisterFormComponent,
    TableEmployeeComponent,
    UpdateEmployeeComponent,
    SalaryHistoryComponent,
    EmployeeInformationComponent,

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
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    FormsModule,
    MatSliderModule,
    MatDialogModule
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
    TableEmployeeComponent,
    MatTooltipModule,
    MatPaginatorModule,
    MatSliderModule,
    MatDialogModule,
    UpdateEmployeeComponent,
    EmployeeInformationComponent
  ]
})
export class ComponentsModule { }
