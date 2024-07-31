import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
 
  @Input() mode: boolean = false;
  @Input() taskObj:any;
  @Output() delEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() addEvent = new EventEmitter();
 
  
  ngOnInit() {
  }
  del(id:number){
    this.delEvent.emit(id)
  }
  edit(id:number){
    this.updateEvent.emit(id)
    console.log('done');
  }

  add(){
    this.addEvent.emit()
  }



  
  
}