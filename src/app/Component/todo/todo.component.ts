import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasklist: { val: string,  id: any }[] = [];
  taskvalue:any;
  editIndex: any;
  id=0;
  isEditMood: boolean = false;
  currentTaskIndex?: number;
  newValue?: any;
  showError:any;
  errorMessage:any;
  taskId: any;
  ngOnInit() {
  }
  deleteTask(index: number) {
      this.tasklist.splice(index, 1);
  }
 
  editTask(taskIndex: number): void {
    this.isEditMood = true;
    this.editIndex = taskIndex;
    this.taskvalue = this.tasklist[taskIndex].val;
   }
  
  saveEdit() {
    if (this.isEditMood && this.editIndex !== null && this.editIndex >= 0 && this.editIndex < this.tasklist.length) {
      this.tasklist[this.editIndex].val = this.taskvalue;
      this.isEditMood = false;
      this.editIndex = null;
    } else if(this.editIndex ||this.editIndex ==0){
      this.addTask()
    }
  }
  addTask() {
    this.isEditMood = false;
    if (!this.taskvalue || this.taskvalue.trim() === '') {
      this.showError = true;
      this.errorMessage = 'Please enter a valid task name.'; 
    } else {
      this.showError = false; 
      this.tasklist.push({ val: this.taskvalue, id: this.id++ });
      this.resetForm()
    }
  }
  resetForm() {
    this.taskvalue = '';
    this.isEditMood = false;
    this.editIndex = null;
  }

 


}
