import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  api = "http://localhost:3000/todos";

  constructor(private http: HttpClient) {}

  getTodos(){
    return this.http.get(this.api);
  }

  addTodo(todo:any){
    return this.http.post(this.api, todo);
  }

  deleteTodo(id:number){
    return this.http.delete(this.api + "/" + id);
  }

  updateTodo(id:number, todo:any){
    return this.http.put(this.api + "/" + id, todo);
  }

}