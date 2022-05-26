import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined ;
  localItem: string |null ;
  constructor() {
    this.localItem = localStorage.getItem('todos')  ;
      console.log(this.localItem); 
      console.log("hlo")

    if(this.localItem == null)
    {
      this.todos = []
    }
    else
    {
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }

  deletetodo(todo: Todo)
  {
     const indexf = this.todos!.indexOf(todo);
     this.todos?.splice(indexf , 1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  Addtodo(todo: Todo)
  {
    this.todos?.push(todo);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
}
