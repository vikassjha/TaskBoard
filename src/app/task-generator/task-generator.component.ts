import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { DoneService } from '../done.services';
import { DoingService } from '../doing.service';

@Component({
  selector: 'app-task-generator',
  templateUrl: './task-generator.component.html',
  styleUrls: ['./task-generator.component.css'],
  
})
export class TaskGeneratorComponent {
 public inputTaskName:string ='';
 constructor(private ts:TodoService,private ds:DoingService,private dds:DoneService)
 {

 }
  onAddToDo()
  {

     this.ts.todoList.unshift(this.inputTaskName);
     console.log(this.ts.todoList);
     this.inputTaskName='';
  }
  onAddToDone()
  {

     this.dds.DoneList.unshift(this.inputTaskName);
     console.log(this.dds.DoneList);
     this.inputTaskName='';
  }
  onAddToDoing()
  {

     this.ds.doingList.unshift(this.inputTaskName);
     console.log(this.ds.doingList);
     this.inputTaskName='';
  }
}
