import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'], // Fixed 'styleUrl' to 'styleUrls'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);
  //   ngOnInit(): void {
  //   console.log(this.todoService.getTodosFromApi());
  //   this.todoItems.set(this.todoService.todoItem);
  // }

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe(todos => {
        this.todoItems.set(todos);
      });
  }
}
