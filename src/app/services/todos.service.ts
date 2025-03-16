import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  // todoItem:Array<Todo> = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: 'delectus aut autem',
  //     completed: false
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: 'quis ut nam facilis et officia qui',
  //     completed: false
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: 'fugiat veniam minus',
  //     completed: false
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: 'et porro tempora',
  //     completed: true
  //   },
  //   {
  //     userId: 1,
  //     id: 5,
  //     title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
  //     completed: false
  //   }
  // ];

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
