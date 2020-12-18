import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  employee: any = {
    eid:'',
    name:'',
    address:'',
    contactno:''
  }
  empid: any;

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
        this.route.params.subscribe(params => {
      this.empid = params['id'];
    });

    if(this.empid != 'new'){
      this.getEmployeeDetailsById(this.empid);
    }
  }

  onSave(){
    this.todoService.saveTodo(this.employee).subscribe(res=>{
      this.router.navigate(['/todolist/']) 
    })
  }
  onCancle(){
    this.router.navigate(['/todolist/']) 
  }

  getEmployeeDetailsById(id){
    this.todoService.getEmployeeDetailsById(id).subscribe((res: any)=>{
console.log("res",res);
      this.employee = res.details;
    })
  }
}
