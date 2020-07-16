import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  public games = [];

  constructor(private _gameService: GamesService, private _profileService: ProfileService) {}

  ngOnInit(): void {

    //get da api
    this._gameService.getGames().subscribe((data) => (this.games = data));
    
    this._profileService.setProfile(localStorage.getItem('username'));
    //teste quando api estiver pronta é comentar ou excluir.
    // this.games = [
    //   {
    //     titulo: 'CBLOL - SEMANA 1 - 04 de Julho',
    //     jogos: [
    //       {
    //         id: 1,
    //         horario: '12:00h',
    //         time1: {
    //           nome: 'KBM',
    //           logo: '../assets/kabum.png'
    //         },
    //         time2: {
    //           nome: 'VK',
    //           logo: '../assets/keyd.png'
    //         }
    //       },
    //       {
    //         id: 2,
    //         horario: '13:00h',
    //         time1: {
    //           nome: 'PNG',
    //           logo: '../assets/pain.png'
    //         },
    //         logo1: '../../assets/pain.png',
    //         time2: {
    //           nome: 'SAN',
    //           logo: '../assets/santos.png'
    //         },
    //         logo2: '../../assets/santos.png',
    //       },
    //       {
    //         id: 3,
    //         horario: '14:00h',
    //         time1: {
    //           nome: 'FUR',
    //           logo: '../assets/furia.png'
    //         },
    //         logo1: '../../assets/furia.png',
    //         time2: {
    //           nome: 'FLA',
    //           logo: '../assets/flamengo.png'
    //         },
    //         logo2: '../../assets/flamengo.png',
    //       },
    //       {
    //         id: 4,
    //         horario: '15:00h',
    //         time1: {
    //           nome: 'ITZ',
    //           logo: '../assets/intz.png'
    //         },
    //         logo1: '../../assets/intz.png',
    //         time2: {
    //           nome: 'PRG',
    //           logo: '../assets/prodigy.png'
    //         },
    //         logo2: '../../assets/prodigy.png',
    //       },
    //     ],
    //   },
    // ];
    //   console.log(this.games[0].jogos);
  }
  testClick() {
    console.log('clicked');
  }
}
