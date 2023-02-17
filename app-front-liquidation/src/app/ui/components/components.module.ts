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
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    NavbarComponent,
    WelcomeBarComponent,
    RegisterFormComponent,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    NavbarComponent,
    WelcomeBarComponent,
    RegisterFormComponent,
  ]
})
export class ComponentsModule { }
