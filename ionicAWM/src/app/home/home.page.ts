import { Component } from '@angular/core';
import {ApiService} from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form = {
    email: '',
    password: ''
  };
  constructor( private api: ApiService) {
  }
  login() {
    this.api.Login(this.form);
  }
}
