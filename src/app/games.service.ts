import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { IGames } from './games'
import { IGame } from './game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  //url api
  //TODO
  private _url: string = environment.baseUrl + "/games";

  constructor(private http: HttpClient) { }

  getGames(): Observable<Object[]>{
    return this.http.get<Object[]>(this._url);
  }

  getMatch(id:string): Observable<Object[]>{
    return this.http.get<Object[]>(this._url+id);
  }
}
