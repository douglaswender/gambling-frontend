import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProfile } from './profile';
import { ILogin } from './login';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  emitirProfile = new EventEmitter<IProfile>();

  private profile:IProfile;

  private _urlStandings: string = environment.baseUrl + "/standings";
  private _urlProfile: string = environment.baseUrl + "/profile";
  private _urlLogin: string = environment.baseUrl + "/login";

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
