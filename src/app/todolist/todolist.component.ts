import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  emplist: any;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.costumer_id = params['costumer_id'];
    // });

    this.getTodoList();
  }

  addToDoList(){
    this.router.navigate(['/add/new']) 
  }

  getTodoList(){
    this.todoService.getTodoList().subscribe((res: any)=>{
console.log("res,",res);
      this.emplist = res.details
    });
  }

  onEdit(id){
    this.router.navigate(['/add/'+ id]) 
  }

  onDelete(id){
    this.todoService.deleteTodo(id).subscribe(res=>{
      this.getTodoList();
    });
  }
}
