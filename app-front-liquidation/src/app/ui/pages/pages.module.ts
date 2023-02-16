import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {DomainModule} from "../../domain/domain.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LiquidationGateway} from "../../domain/models/gateways/liquidation.gateway";
import {LiquidationService} from "../../infrastructure/driven_adapter/liquidation/liquidation.service";
import {EmployeeGateway} from "../../domain/models/gateways/employee.gateway";
import {EmployeeService} from "../../infrastructure/driven_adapter/employee/employee.service";
import {SalaryGateway} from "../../domain/models/gateways/salary.gateway";
import {SalaryService} from "../../infrastructure/driven_adapter/salary/salary.service";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    DomainModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    {provide: LiquidationGateway, useClass: LiquidationService},
    {provide: EmployeeGateway, useClass: EmployeeService},
    {provide: SalaryGateway, useClass: SalaryService}
  ]
})
export class PagesModule { }
