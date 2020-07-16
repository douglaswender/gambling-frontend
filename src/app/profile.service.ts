import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProfile } from './profile';
import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  emitirProfile = new EventEmitter<IProfile>();

  private profile:IProfile;
  private return;

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
    return this.http.post<ILogin>(this._urlLogin, {login: username, password: password});
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
