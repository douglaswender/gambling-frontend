import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IGame } from './game';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //url api
  //TODO
  private _url: string = "https://us-central1-gambling-club.cloudfunctions.net/app/games/";

  constructor(private http: HttpClient) { }

  getMatch(id:string): Observable<IGame[]>{
    return this.http.get<IGame[]>(this._url+id);
  }
}
