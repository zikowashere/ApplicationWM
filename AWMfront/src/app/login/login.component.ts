import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  routeParams: any
  constructor( private api: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  LoginAuth(form) {
     this.routeParams = this.activeRoute.snapshot.params;
     console.log(this.routeParams);
     this.api.Login(form);
  }

}
