import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeUseCase} from "./usecase/employee.usecase";
import {LiquidationUseCase} from "./usecase/liquidation.usecase";
import {SalaryUseCase} from "./usecase/salary.usecase";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EmployeeUseCase,
    LiquidationUseCase,
    SalaryUseCase,
  ]
})
export class DomainModule { }
