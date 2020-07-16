import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  name = '';
  hall = [];

  constructor(
    private _standingsService: ProfileService,
    private route: ActivatedRoute,
    private _profileService: ProfileService
  ) {}

  ngOnInit() {
    //get da api
    this._standingsService.getStandings().subscribe((data) => {
      this.hall = data
      console.log(data);
    });

    //atualiza header como o username e saldo atualizados;
    this._profileService.setProfile(localStorage.getItem('username'));
    
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.name = id;
  }

}
