import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-todo-group',
  templateUrl: './todo-group.component.html',
  styleUrls: ['./todo-group.component.scss']
})
export class TodoGroupComponent implements OnInit {
  titre: string;
  TodoGroup: any;
  constructor(private api: ApiService ) {
  }

  ngOnInit() {
    this.api.GetTodoGroup().subscribe(res =>
    {
      this.TodoGroup = res;
      console.log('todogroup', this.TodoGroup);
    });
  }


  AddGroup(form) {
    this.titre = form;
    console.log(form);
    this.api.AddToGroup(form);
  }
   delete(id) {
    this.api.Delete(id);
  }


}
