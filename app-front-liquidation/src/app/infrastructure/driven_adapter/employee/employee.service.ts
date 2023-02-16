import { Injectable } from '@angular/core';
import {EmployeeGateway} from "../../../domain/models/gateways/employee.gateway";
import {
  IEmployeeModel,
  IEmployeePageResponse,
  IUpdateEmployeeModel
} from "../../../domain/models/employee/employee.model";
import {Observable} from "rxjs";
import {IResponseExceptionModel} from "../../../domain/models/exceptions/exception.model";
import {IPaginationEmployeeModel} from "../../../domain/models/pagination/pagination.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends EmployeeGateway{

  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  private apiUrl = "/api/employee";

  constructor(public http : HttpClient) {
    super();
  }

  createEmployee(model: IEmployeeModel): Observable<IEmployeeModel | IResponseExceptionModel | IResponseExceptionModel[]> {
    return undefined;
  }

  findEmployee(id: string): Observable<IEmployeeModel | IResponseExceptionModel | IResponseExceptionModel[]> {
    return undefined;
  }

  findEmployeeBySalaryRange(model: IPaginationEmployeeModel): Observable<IEmployeePageResponse | IResponseExceptionModel | IResponseExceptionModel[]> {
    return undefined;
  }

  updateEmployee(model: IUpdateEmployeeModel): Observable<IEmployeeModel | IResponseExceptionModel | IResponseExceptionModel[]> {
    return undefined;
  }
}
