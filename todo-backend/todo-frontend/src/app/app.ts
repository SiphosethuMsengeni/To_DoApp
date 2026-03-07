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
  filteredTodos:any[] = [];
  newTodo = "";
  editId:any = null;
  editText = "";
  filter: string = 'all';

  constructor(private todoService:TodoService){
    this.loadTodos();
  }

  loadTodos(){
    this.todoService.getTodos().subscribe((data:any)=>{
      this.todos = data;
      this.applyFilter();
    });
  }

  applyFilter(){
    if(this.filter === 'all'){
      this.filteredTodos = this.todos;
    } else if(this.filter === 'active'){
      this.filteredTodos = this.todos.filter(t => !t.completed);
    } else if(this.filter === 'completed'){
      this.filteredTodos = this.todos.filter(t => t.completed);
    }
  }

  setFilter(filter: string){
    this.filter = filter;
    this.applyFilter();
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
    if(confirm('Are you sure you want to delete this task?')){
      this.todoService.deleteTodo(id)
      .subscribe(()=> this.loadTodos());
    }
  }

  toggleComplete(todo:any){
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo.id, {completed: todo.completed})
    .subscribe(()=> this.applyFilter());
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