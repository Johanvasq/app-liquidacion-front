import { Component, OnInit } from '@angular/core';
import {EmployeeUseCase} from "../../../domain/usecase/employee.usecase";
import {IPaginationEmployeeModel} from "../../../domain/models/pagination/pagination.model";
import {IEmployeeModel} from "../../../domain/models/employee/employee.model";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorsUseCase} from "../../../domain/usecase/errors.usecase";

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css']
})
export class TableEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['identification', 'name', 'salary', 'state', 'actions'];
  dataSource: IEmployeeModel[] = [];
  constructor(private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private employeeUseCase: EmployeeUseCase,
              private errors: ErrorsUseCase) {

  }

  ngOnInit(): void {
    this.findEmployees();
  }

  findEmployees() {
    let model: IPaginationEmployeeModel = {
      page: 1
    }
    this.employeeUseCase.findEmployeeBySalaryRange(model).subscribe(result => {
      if (result && "totalPages" in result && "results" in result && result.employees) {
        this.dataSource = result.employees
      } else {
        this.errors.error(result);
      }
    })
  }





}
