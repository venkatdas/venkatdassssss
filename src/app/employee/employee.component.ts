import { Employee } from './../employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  // employee:Employee;
  // constructor(){
  //  this.employee = new Employee('venktdas','dev',100000);
  // }
  employee=new Employee();
  lstEmployee: Employee[]=[
    {id:1,name:'venkat',email:'venkat@gmail.com',salary:20000},
    {id:2,name:'das',email:'das@gmail.com',salary:30000},
    {id:3,name:'kvds',email:'kvds@gmail.com',salary:50000}
  ]
}
