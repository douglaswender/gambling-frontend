import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { IGames } from './games'
import { IGame } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  //url api
  //TODO
  private _url: string = "http://localhost:5001/gambling-club/us-central1/app/games/";

  constructor(private http: HttpClient) { }

  getGames(): Observable<Object[]>{
    return this.http.get<Object[]>(this._url);
  }

  getMatch(id:string): Observable<Object[]>{
    return this.http.get<Object[]>(this._url+id);
  }
}
