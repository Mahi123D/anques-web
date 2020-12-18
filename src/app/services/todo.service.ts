import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  path = "todo"
  constructor(private backendService: BackendService) { }

  saveTodo(details){
    console.log("details",details);
    return this.backendService.post(this.path, details);
  }

  getTodoList(){
    return this.backendService.get(this.path+ '/list/');  
  }

  deleteTodo(id){
    return this.backendService.get(this.path+ '/tododelete/' + id);  
  }

  getEmployeeDetailsById(id){
    return this.backendService.get(this.path+ '/todo/' + id);  
  }
}
