import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IResponseExceptionModel} from "../../../domain/models/exceptions/exception.model";
import {EmployeeUseCase} from "../../../domain/usecase/employee.usecase";
import {IEmployeeModel} from "../../../domain/models/employee/employee.model";
import {ErrorsUseCase} from "../../../domain/usecase/errors.usecase";

/**
 * Validate Range of provided date
 * @param control
 */
function dateRange(control: FormControl) {
  const date = new Date(control.value);
  const startDate = new Date('2015/01/01');
  const endDate = new Date('2023/06/06');
  if (date >= startDate && date <= endDate) {
    return null;
  } else {
    return {outOfRange: true};
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private employeeUseCase: EmployeeUseCase,
              private errors: ErrorsUseCase) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      identification: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      position: ["", [Validators.pattern('^[a-zA-Z0-9 ]*$'), Validators.minLength(10), Validators.maxLength(30)]],
      salary: ["", [Validators.required, Validators.min(1160000), Validators.max(7000000)]],
      contractStart: ["", Validators.compose([Validators.required, dateRange])]
    })
  }

  ngOnInit(): void {
  }

  saveEmployee() {
    let model: IEmployeeModel = {
      name: this.form.value.name,
      id: this.form.value.identification,
      contractStart: this.formatDate(this.form.value.contractStart),
      currentSalary: this.form.value.salary,
    }
    if (this.form.value.position && this.form.value.position !== "") {
      model.position = this.form.value.position
    }
    console.log(model)
    this.employeeUseCase.createEmployee(model).subscribe(result => {
      if ("name" in result && "id" in result) {
        this._snackBar.open(`Employee register successfully`, "", {
          duration: 5000,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.form.reset();
      } else {
        this.errors.error(result);
      }
    })
  }


  formatDate(date: string): string {
    let d = new Date(date);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();

    let fMonth: string = month.toString()
    let fDay: string = day.toString()
    if (month < 10) {
      fMonth = '0' + month.toString();
    }
    if (day < 10) {
      fDay = '0' + day.toString();
    }

    return `${year}/${fDay}/${fMonth}`;
  }


}
