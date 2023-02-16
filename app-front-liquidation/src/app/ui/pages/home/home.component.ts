import { Component, OnInit } from '@angular/core';
import {EmployeeUseCase} from "../../../domain/usecase/employee.usecase";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private employeeUseCase: EmployeeUseCase) { }

  ngOnInit(): void {
  }

}
