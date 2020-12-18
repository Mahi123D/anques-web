import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  { path: '', component: TodolistComponent},
  { path: 'add/:id', component: AddTodoComponent},
  { path: 'todolist', component: TodolistComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }