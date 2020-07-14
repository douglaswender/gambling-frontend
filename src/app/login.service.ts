import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _profileService:ProfileService) { }


}
