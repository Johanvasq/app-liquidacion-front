import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeUseCase} from "../../../domain/usecase/employee.usecase";
import {IPaginationEmployeeModel} from "../../../domain/models/pagination/pagination.model";
import {IEmployeeModel} from "../../../domain/models/employee/employee.model";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorsUseCase} from "../../../domain/usecase/errors.usecase";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css']
})
export class TableEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['identification', 'name', 'salary', 'state', 'actions'];
  employee: IEmployeeModel[] = [];
  dataSource = new MatTableDataSource<IEmployeeModel>(this.employee);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  constructor(private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private employeeUseCase: EmployeeUseCase,
              private errors: ErrorsUseCase) {
  }

  ngOnInit(): void {
    let model: IPaginationEmployeeModel = {
      page: 1
    }
    this.findEmployees(model);
  }

  findEmployees(model: IPaginationEmployeeModel) {

    this.employeeUseCase.findEmployeeBySalaryRange(model).subscribe(result => {
      if (result && "totalPages" in result && "results" in result && result.employees) {
        this.employee = result.employees;
        this.dataSource.data = result.employees;
        this.dataSource.paginator!.pageIndex = 1;
        this.dataSource.paginator!.length = result.results;
        this.dataSource.paginator!.pageSize = 5;

      } else {
        this.errors.error(result);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handlePageEvent(){
    let model: IPaginationEmployeeModel = {
      recordsPerPage: this.dataSource.paginator?.pageSize,
      page: this.dataSource.paginator!.pageIndex + 1
    }
    this.findEmployees(model);
  }





}
