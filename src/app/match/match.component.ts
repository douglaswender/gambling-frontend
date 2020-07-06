import { Component, OnInit } from '@angular/core';
import { Team } from '../TeamModel';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent implements OnInit {
  match: any;
  teamSelected: Team;
  showBetAmount: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.teamSelected = new Team(0, '', '', '');
    this.showBetAmount = false;
    this.match = {
      id: 1,
      horario: '12:00h',
      time1: new Team(1, 'KBM', 'KBM', '../../assets/kabum.png'),
      time2: new Team(2, 'VK', 'VK', '../../assets/keyd.png'),
      class: '',
    };
  }

  selectItem(team: Team) {
    console.log(team);
    console.log(this.teamSelected);
    if (this.teamSelected.id === team.id) {
      this.showBetAmount = false;
      this.teamSelected = new Team(0, '', '', '');
    } else {
      this.teamSelected = team;
      this.showBetAmount = true;
    }
  }
}
