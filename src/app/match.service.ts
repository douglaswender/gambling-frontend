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
  private _url: string = "http://localhost:5001/gambling-club/us-central1/app/games/";

  constructor(private http: HttpClient) { }

  getMatch(id:string): Observable<IGame[]>{
    return this.http.get<IGame[]>(this._url+id);
  }
}
