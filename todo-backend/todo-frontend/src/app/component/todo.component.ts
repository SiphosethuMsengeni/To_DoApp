import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  todos: any[] = [];
  newTodo = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((data:any) => {
      this.todos = data;
    });
  }

  addTodo() {
    if(this.newTodo.trim() === '') return;

    this.todoService.addTodo({text:this.newTodo})
      .subscribe(()=>{
        this.newTodo = '';
        this.loadTodos();
      });
  }

  deleteTodo(id:any){
    this.todoService.deleteTodo(id)
      .subscribe(()=>{
        this.loadTodos();
      });
  }

}