import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-add-itens',
  templateUrl: './todo-button-add-itens.component.html',
  styleUrls: ['./todo-button-add-itens.component.scss']
})
export class TodoButtonAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addTaskItemList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addTaskItemList = this.addTaskItemList.trim();
    if(this.addTaskItemList){
      this.emitItemTaskList.emit(this.addTaskItemList);
      this.addTaskItemList = "";
    }
  }

}
