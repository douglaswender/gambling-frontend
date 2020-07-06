import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingsComponent } from './standings/standings.component';
import { GamesComponent } from './games/games.component';
import { MatchComponent } from './match/match.component';


const routes: Routes = [
  {
    path: 'games', component: GamesComponent
  },
  {
    path: 'standings', component: StandingsComponent
  },
  {
    path: 'match/:id', component: MatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
