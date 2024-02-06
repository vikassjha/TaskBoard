import { Component } from '@angular/core';

import { Input } from '@angular/core';
import { DoneService } from '../done.services';
import { DoingService } from '../doing.service';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  
})
export class TodoComponent {

  constructor(private ds:DoingService,private dds:DoneService,private ts:TodoService)
  {

  }
 @Input() todoTaskName:string='';
 MoveToDoneFromDo(){
     this.dds.DoneList.unshift(this.todoTaskName);
     const indexToremove= this.ts.todoList.indexOf(this.todoTaskName);
     this.ts.todoList.splice(indexToremove,1);
 }
 MoveToDoingFromDo()
 {
  this.ds.doingList.unshift(this.todoTaskName);
     const indexToremove= this.ts.todoList.indexOf(this.todoTaskName);
     this.ts.todoList.splice(indexToremove,1);
 }
 
}
