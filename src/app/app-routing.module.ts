import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingsComponent } from './standings/standings.component';
import { GamesComponent } from './games/games.component';
import { MatchComponent } from './match/match.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component'


const routes: Routes = [
  {
    path: 'games', component: GamesComponent
  },
  {
    path: 'standings', component: StandingsComponent
  },
  {
    path: 'match/:id', component: MatchComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
