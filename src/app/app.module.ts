import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskGeneratorComponent } from './task-generator/task-generator.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { DoingComponent } from './doing/doing.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskGeneratorComponent,
    TodoComponent,
    DoingComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
