import { Component, OnInit } from '@angular/core';
import {EmployeeUseCase} from "../../../domain/usecase/employee.usecase";
import {IEmployeeModel} from "../../../domain/models/employee/employee.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeModel: IEmployeeModel = {
    name: "Jho?n",
    id: "12345678899",
    contractStart: "",
    position: "Software developer",
    currentSalary: 2000000
  }

  constructor(private employeeUseCase: EmployeeUseCase) { }

  ngOnInit(): void {
    this.employeeUseCase.createEmployee(this.employeeModel).subscribe(result =>{
      console.log(result);
    })
  }

}
