import { Component, OnInit } from '@angular/core';
import {ApiService} from '../rest.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  TodoGroup: any;
  refresher: any
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.GetTodoGroup().subscribe(res =>
    {
      this.TodoGroup = res;
      console.log('todogroup', this.TodoGroup);
    });
  }

  AddGroup(form) {
    console.log(form);
    this.api.AddToGroup(form);
  }
  delete(id) {
    this.api.Delete(id);
  }
}

