import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel} from '@angular/forms';
import {ApiService} from '../api.service';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  constructor(private api: ApiService) {


  }

  ngOnInit() {
  }

  OnSubmit(user) {
      this.api.Register(user);
   }

}



