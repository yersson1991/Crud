import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeArray:Employee[]=[
    {id: 1, name :"yerson",country :"colombia"},
    {id: 2, name :"yainover",country :"bogota"},
    {id: 3, name :"roa",country :"soacha"},
  ];

  selectedEmployee:Employee = new Employee();
  
  addorEdit (){

    if (this.selectedEmployee.id===0){
      this.selectedEmployee.id=this.employeeArray.length+1;
      this.employeeArray.push(this.selectedEmployee);
    }


   
    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  delete(){
  
    if(confirm("esta seguro de eliminar")){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }

  }
  

}
