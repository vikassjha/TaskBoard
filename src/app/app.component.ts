import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { DoingService } from './doing.service';
import { DoneService } from './done.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoService,DoneService,DoingService]
})
export class AppComponent {
  title = 'mytaskboard';
  todoLists: string[]=[];
  toDoneLists:string[]=[];
  toDoingLists:string[]=[];
  constructor(private ts:TodoService,private ds:DoingService,private dds:DoneService)
  {
     this.todoLists=this.ts.todoList;
     this.toDoneLists=this.dds.DoneList;
     this.toDoingLists=this.ds.doingList;
  }
}
