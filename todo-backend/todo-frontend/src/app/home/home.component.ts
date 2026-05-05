import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todos: any[] = [];
  filteredTodos: any[] = [];
  newTodo = '';
  newPriority = 'medium';
  newDueDate = '';
  editId: any = null;
  editText = '';
  editPriority = '';
  editDueDate = '';
  filter = 'all';
  searchText = '';

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  get progressPercentage(): number {
    if (this.todos.length === 0) return 0;
    const completed = this.todos.filter((todo) => todo.completed).length;
    return Math.round((completed / this.todos.length) * 100);
  }

  get completedCount(): number {
    return this.todos.filter((todo) => todo.completed).length;
  }

  get allCompleted(): boolean {
    return this.todos.length > 0 && this.todos.every((todo) => todo.completed);
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
      this.applyFilter();
    });
  }

  applyFilter() {
    let filtered = this.todos;

    if (this.filter === 'active') {
      filtered = filtered.filter((todo) => !todo.completed);
    } else if (this.filter === 'completed') {
      filtered = filtered.filter((todo) => todo.completed);
    }

    if (this.searchText.trim()) {
      filtered = filtered.filter((todo) =>
        todo.text.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    this.filteredTodos = filtered;
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.applyFilter();
  }

  onSearchChange() {
    this.applyFilter();
  }

  isOverdue(todo: any): boolean {
    if (!todo.dueDate || todo.completed) return false;
    return new Date(todo.dueDate) < new Date();
  }

  addTodo() {
    if (!this.newTodo.trim()) return;

    this.todoService
      .addTodo({
        text: this.newTodo,
        priority: this.newPriority,
        dueDate: this.newDueDate || null
      })
      .subscribe(() => {
        this.newTodo = '';
        this.newPriority = 'medium';
        this.newDueDate = '';
        this.loadTodos();
      });
  }

  deleteTodo(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.todoService.deleteTodo(id).subscribe(() => this.loadTodos());
    }
  }

  toggleComplete(todo: any) {
    todo.completed = !todo.completed;
    this.todoService
      .updateTodo(todo.id, { completed: todo.completed })
      .subscribe(() => this.applyFilter());
  }

  startEdit(todo: any) {
    this.editId = todo.id;
    this.editText = todo.text;
    this.editPriority = todo.priority;
    this.editDueDate = todo.dueDate || '';
  }

  updateTodo() {
    this.todoService
      .updateTodo(this.editId, {
        text: this.editText,
        priority: this.editPriority,
        dueDate: this.editDueDate || null
      })
      .subscribe(() => {
        this.editId = null;
        this.loadTodos();
      });
  }

  getPriorityClass(priority: string): string {
    return `priority-${priority}`;
  }
}
