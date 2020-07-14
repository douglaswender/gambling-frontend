import { Component, OnInit } from '@angular/core';
import { Team } from '../TeamModel';
import { GamesService } from '../games.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent implements OnInit {
  match: any = '';
  teamSelected: Team = new Team(0, '', '', '');
  showBetAmount: boolean;

  constructor(
    private _gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.teamSelected = new Team(0, '', '', '');
    this.showBetAmount = false;

    let id = this.route.snapshot.paramMap.get('id');

    //get da api
    this._gamesService.getMatch(id).subscribe((data) => {
      this.match = data;
      console.log(this.match);
      if (this.match.cod == 1006) {
        console.log('erro');
        this.router.navigate(['games']);
      }
    });
  }

  betGambling(){
    this.ngOnInit;
  }

  selectItem(team: Team) {
    console.log(team);
    console.log(this.teamSelected);
    if (this.teamSelected.nome === team.nome) {
      this.showBetAmount = false;
      this.teamSelected = new Team(0, '', '', '');
    } else {
      this.teamSelected = team;
      this.showBetAmount = true;
    }
  }
}
