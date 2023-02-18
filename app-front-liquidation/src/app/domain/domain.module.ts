import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeUseCase} from "./usecase/employee.usecase";
import {LiquidationUseCase} from "./usecase/liquidation.usecase";
import {SalaryUseCase} from "./usecase/salary.usecase";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ErrorsUseCase} from "./usecase/errors.usecase";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    EmployeeUseCase,
    LiquidationUseCase,
    SalaryUseCase,
    ErrorsUseCase
  ],
  exports: [
    MatSnackBarModule
  ]
})
export class DomainModule { }
