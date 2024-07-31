import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent} from './Component/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './Component/todo/todo.component';
import { TaskComponent } from './Component/task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
