import { Component } from '@angular/core';

interface Item{
  text:string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: Item[] = [];

  showInputForm: boolean = false;
  toggleInputForm() {
    this.showInputForm = !this.showInputForm;
  }

  addItem(text: string) {
    this.items.push({ text });
    this.showInputForm = false;
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
