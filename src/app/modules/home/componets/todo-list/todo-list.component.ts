import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: "Minha nova Task", checked: false},
    {task: "Minha nova Task2", checked: true}
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteTaskListAll(){
    const confirm = window.confirm("Você Realmente deseja deletar tudo?");
    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string,index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

}
