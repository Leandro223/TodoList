import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonAddItensComponent } from './todo-button-add-itens.component';

describe('TodoButtonAddItensComponent', () => {
  let component: TodoButtonAddItensComponent;
  let fixture: ComponentFixture<TodoButtonAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
