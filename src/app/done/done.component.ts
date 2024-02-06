import { Component } from '@angular/core';
import {Input} from '@angular/core';
import { DoneService } from '../done.services';
import { DoingService } from '../doing.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {
  constructor(private ds:DoingService,private dds:DoneService,private ts:TodoService)
  {

  }
  @Input() todoneTaskName:string='';

  MoveToDoFromDone()
  {
    this.ts.todoList.unshift(this.todoneTaskName);
    const indexToremove= this.dds.DoneList.indexOf(this.todoneTaskName);
    this.dds.DoneList.splice(indexToremove,1);
  }
  MoveToDoingFromDone()
  {
    this.ds.doingList.unshift(this.todoneTaskName);
    const indexToremove= this.dds.DoneList.indexOf(this.todoneTaskName);
    this.dds.DoneList.splice(indexToremove,1);
  }

}
