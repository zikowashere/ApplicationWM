import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  routeParams: any
  constructor(private api: ApiService , private ActiveRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeParams = this.ActiveRoute.snapshot.params;
  }
  Update(form) {
    this.api.Update(form, this.routeParams.id);
    console.log('le param', this.routeParams.id);
  }

}
