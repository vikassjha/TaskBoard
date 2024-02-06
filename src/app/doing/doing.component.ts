import { Component } from '@angular/core';
import {Input} from '@angular/core';
import { DoingService } from '../doing.service';
import { DoneService } from '../done.services';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent {
@Input() todoingTaskName:string='';
constructor(private ds:DoingService,private dds:DoneService,private ts:TodoService)
  {

  }
MoveToDoFromDoing()
{
  this.ts.todoList.unshift(this.todoingTaskName);
  const indexToremove= this.ds.doingList.indexOf(this.todoingTaskName);
  this.ds.doingList.splice(indexToremove,1);
}
MoveToDoneFromDoing()
{
  this.dds.DoneList.unshift(this.todoingTaskName);
  const indexToremove= this.ds.doingList.indexOf(this.todoingTaskName);
  this.ds.doingList.splice(indexToremove,1);
}
}
