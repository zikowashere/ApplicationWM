import { Component, OnInit } from '@angular/core';
import {ApiService} from '../rest.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {
  routeParams: any
  listTache: any
  constructor(private api: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeParams = this.activeRoute.snapshot.params;
    console.log('id', this.routeParams.id);
    this.api.GetTaches(this.routeParams.id).subscribe(res =>
    {
      this.listTache = res;
      console.log('todo', this.listTache);
    });
  }
  Addtache(form) {
    console.log(this.routeParams.id);
    this.api.AddTache(form, this.routeParams.id);
  }


}
