import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SalaryGateway} from "../../../domain/models/gateways/salary.gateway";
import {Observable} from "rxjs";
import {ISalaryModel} from "../../../domain/models/salary/salary.model";
import {IResponseExceptionModel} from "../../../domain/models/exceptions/exception.model";

@Injectable({
  providedIn: 'root'
})
export class SalaryService extends SalaryGateway{

  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  private apiUrl = "/api/salary";
  constructor(private http : HttpClient) {
    super();
  }

  modificationSalariesEmployee(id: string): Observable<ISalaryModel | IResponseExceptionModel | IResponseExceptionModel[]> {
    return this.http.get<ISalaryModel | IResponseExceptionModel |
      IResponseExceptionModel[]>(`${this.apiUrl}/${id}`, {headers : this.httpHeaders});
  }
}
