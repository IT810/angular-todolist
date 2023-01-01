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
  all: Task[] = [];
  content: string = "";
  tab: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  loading(){
    this.tab = !this.tab;
    this.tasks = this.all.filter(x => x.status === this.tab);
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
      this.tasks = this.all;
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
  }

  deleteAll()
  {
    this.tasks = [];
  }

}
