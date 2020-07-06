import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  name = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log(this.route);
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.name = id;
  }

}
