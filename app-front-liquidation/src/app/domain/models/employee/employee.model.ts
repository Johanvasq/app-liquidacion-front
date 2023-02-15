export interface IEmployeeModel{
  id? : string;
  name : string;
  contractStart : string; //date format "yyyy-dd-MM"
  position? : string;
  currentSalary : number;
  state? : boolean;
  lastSalaryUpdated? : string; //date format "yyyy-dd-MM"
}

export interface IUpdateEmployee{
  id: string;
  position? : string;
  updateSalary : number;
  modificationDate : string // date format "yyyy-dd-MM"
}


