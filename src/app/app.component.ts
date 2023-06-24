import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[]=[
    {id:1, name:"Juan", country:"USA"},
    {id:2, name:"Elena", country:"Espeña"},
    {id:3, name:"Francisco", country:"Colombia"},
    {id:4, name:"Maria", country:"Japon"},
  ];

  selectedEmployee: Employee = new Employee();
  addOrEdit(){
    if(this.selectedEmployee.id === 0){
          this.selectedEmployee.id = this.employeeArray.length +1;
          this.employeeArray.push(this.selectedEmployee);

    }
    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }
  delet(){
    if(confirm('¿Estas seguro de eliminarlo de la lista?')){
      this.employeeArray = this.employeeArray.filter(x => x !=this.selectedEmployee);
    this.selectedEmployee = new Employee();
    }    
  }
}
