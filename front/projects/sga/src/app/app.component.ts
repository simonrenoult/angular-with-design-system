import { Component } from '@angular/core';
import { HttpClientService } from 'http-client';

@Component({
  selector: 'sga-root',
  template: `
    <nexsis-primary-button
      [text]="title"
      (clicked)="fetchTodos()"
    ></nexsis-primary-button>
  `,
  styles: []
})
export class AppComponent {
  title = 'sga';

  constructor(private httpClientService: HttpClientService) {
  }

  async fetchTodos(): Promise<void> {
    const todos = await this.httpClientService.get('https://jsonplaceholder.typicode.com/todos');
    console.log(todos.map(todo => todo.title));
  }
}
