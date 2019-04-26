import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss']
})
export class TachesComponent implements OnInit {
   tache: string
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
    this.tache = form;
    console.log('la tache' , form);
    console.log(this.routeParams.id);
    this.api.AddTache(form, this.routeParams.id);
  }

}
