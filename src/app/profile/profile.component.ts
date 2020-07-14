import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service';
import { IProfile } from '../profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nickname = "intrigante";
  profile:IProfile;

  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this._profileService.getProfile(this.nickname).subscribe((data)=>{
      console.log(data)
      this.profile = data;
    })
  }

}
