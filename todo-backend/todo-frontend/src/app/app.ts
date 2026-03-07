import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  todos:any[] = [];
  newTodo = "";
  editId:any = null;
  editText = "";

  constructor(private todoService:TodoService){
    this.loadTodos();
  }

  loadTodos(){
    this.todoService.getTodos().subscribe((data:any)=>{
      this.todos = data;
    });
  }

  addTodo(){
    if(!this.newTodo) return;

    this.todoService.addTodo({text:this.newTodo})
    .subscribe(()=>{
      this.newTodo="";
      this.loadTodos();
    });
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo(id)
    .subscribe(()=> this.loadTodos());
  }

  startEdit(todo:any){
    this.editId = todo.id;
    this.editText = todo.text;
  }

  updateTodo(){
    this.todoService.updateTodo(this.editId,{text:this.editText})
    .subscribe(()=>{
      this.editId = null;
      this.loadTodos();
    });
  }

}