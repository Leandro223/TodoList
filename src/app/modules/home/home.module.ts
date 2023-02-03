import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { TodoButtonDeleteAllComponent } from './componets/todo-button-delete-all/todo-button-delete-all.component';
import { TodoButtonAddItensComponent } from './componets/todo-button-add-itens/todo-button-add-itens.component';
import { TodoListComponent } from './componets/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoButtonAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
