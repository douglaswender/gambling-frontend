import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProfile } from './profile';
import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  emitirProfile = new EventEmitter<IProfile>();

  private profile:IProfile;

  private httpOptions = {
    headers:  new HttpHeaders({
      'Access-Controll-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }

  private _urlStandings: string = "https://us-central1-gambling-club.cloudfunctions.net/app/standings/";
  private _urlProfile: string = "https://us-central1-gambling-club.cloudfunctions.net/app/profile/";
  private _urlLogin: string = "https://us-central1-gambling-club.cloudfunctions.net/app/login";

  constructor(private http: HttpClient) { }

  getStandings(){
    return this.http.get<IProfile[]>(this._urlStandings);
  }
  getProfile(username:string){
    return this.http.post<IProfile>(this._urlProfile, {user: username});
  }
  login(username:string, password: string){
    return this.http.post<ILogin>(this._urlLogin, {login: username, password: password}, this.httpOptions);
  }

  setProfile(profile:string){
    console.log('username: ', profile);
    this.getProfile(profile).subscribe((data)=>{
      console.log('data from setProfile')
      console.log(data);
      this.emitirProfile.emit(data);
    });

  }

  getProfileStored():IProfile{
    return this.profile;
  }
}
