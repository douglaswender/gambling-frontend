import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProfile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _urlStandings: string = "http://localhost:5001/gambling-club/us-central1/app/standings/";
  private _urlProfile: string = "http://localhost:5001/gambling-club/us-central1/app/profile/";
  private _urlLogin: string = "http://localhost:5001/gambling-club/us-central1/app/login";

  constructor(private http: HttpClient) { }

  getStandings(){
    return this.http.get<IProfile[]>(this._urlStandings);
  }
  getProfile(username:string){
    return this.http.post<IProfile>(this._urlProfile, {user: username});
  }
  login(username:string, password: string){
    return this.http.post<IProfile>(this._urlLogin, {login: username, password: password});
  }
}
