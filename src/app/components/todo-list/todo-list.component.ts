import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [];
  todo: Task[] = [];
  done: Task[] = [];
  content: string = "";
  tab: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  submit() 
  {
    if(this.content !== ""){
      
      let task:Task = {
        id: uuid(),
        content: this.content,
        status: true
      };

      this.tasks.unshift(task);
      this.todo = this.tasks.filter(x => x.status === true);
      this.done = this.tasks.filter(x => x.status === false);
      this.content = "";
    }
  }

  deleteItemById(id: string)
  {
    this.tasks = this.tasks.filter(x => x.id !== id);
  }

  doneTask(id: string)
  {
    var task = this.tasks.find(x => x.id === id);

    if(task !== undefined){
      task.status = !task.status;
    }
    this.todo = this.tasks.filter(x => x.status === true);
    this.done = this.tasks.filter(x => x.status === false);
  }

  deleteAll()
  {
    this.tasks = this.tasks.filter(x => x.status === false);
    this.todo = this.tasks.filter(x => x.status === true);
    this.done = this.tasks.filter(x => x.status === false);
  }

}
