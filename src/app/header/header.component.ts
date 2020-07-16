import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service';
import { IProfile } from '../profile';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile:IProfile;
  isLogged: boolean = false;
  nickname:string;
  constructor(private _profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.nickname = localStorage.getItem('username');

    this._profileService.emitirProfile.subscribe((data)=>{
      console.log("SUB HYPE!");
      console.log(data)
      this.profile = data;
      if(this.profile === undefined){
        this.isLogged = false;
      } else{
        this.isLogged = true;
      }
    });


    console.log(localStorage.getItem('username'));
    // this._profileService.getProfile(this.nickname).subscribe((data)=>{
    //   console.log(data)
    //   this.profile = data;

    // })

  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.profile = undefined;
    this.ngOnInit();
    this.router.navigate(['/login']);
    this.isLogged = false;
  }

}
